import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Type for Paystack response
interface PaystackResponse {
  reference: string;
  status: string;
  message: string;
  trans?: string;
  transaction?: string;
  trxref?: string;
}

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const navigate = useNavigate();

  // State for checkout dialog
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [emailError, setEmailError] = useState("");

  // Get Paystack public key from environment variable
  const paystackPublicKey =
    import.meta.env.VITE_PAYSTACK_PUBLIC_KEY ||
    "pk_test_5f97d94fe2603694d971bbbacf297110a5491452";

  // Paystack Configuration
  const config = {
    reference: new Date().getTime().toString(),
    email: customerEmail,
    amount: Math.round(total * 100), // Amount in kobo (smallest currency unit)
    publicKey: paystackPublicKey,
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: customerName,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: customerPhone,
        },
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: items
            .map((item) => `${item.name} (x${item.quantity})`)
            .join(", "),
        },
      ],
    },
  };

  // Initialize Paystack Payment
  const initializePayment = usePaystackPayment(config);

  // Validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle successful payment
  const onSuccess = (reference: PaystackResponse) => {
    console.log("Payment successful:", reference);

    // Here you would typically:
    // 1. Send order details to your backend
    // 2. Verify the payment with Paystack
    // 3. Create an order in your database
    // 4. Send confirmation email

    // Clear the cart
    clearCart();

    // Close dialog
    setShowCheckoutDialog(false);

    // Show success message
    alert(`Payment Successful! 🎉

Reference: ${reference.reference}
Status: ${reference.status}

Thank you for your purchase!
You will receive a confirmation email shortly.`);

    // Navigate to home or order success page
    // You can create a dedicated success page instead
    navigate("/");
  };

  // Handle payment closure (user closes payment modal)
  const onClose = () => {
    console.log("Payment modal closed by user");
    // You could show a toast notification here instead of alert
    alert("Payment was not completed. Your cart items are still saved.");
  };

  // Handle checkout button click
  const handleCheckout = () => {
    if (items.length === 0) return;
    setShowCheckoutDialog(true);
  };

  // Handle payment initiation
  const handlePayNow = () => {
    // Validate email
    if (!customerEmail || !validateEmail(customerEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!customerName.trim()) {
      alert("Please enter your name");
      return;
    }

    // Validate phone (optional but good practice)
    if (customerPhone && customerPhone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    // Clear any previous errors
    setEmailError("");

    // Initialize payment
    initializePayment({
      onSuccess,
      onClose,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any products yet.
            </p>
            <Button asChild variant="hero">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-4 sm:p-6 space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 items-start sm:items-center border-b border-border last:border-0 pb-4 last:pb-0"
                    >
                      <div className="h-20 w-20 bg-secondary rounded-lg overflow-hidden shrink-0 mx-auto sm:mx-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow min-w-0 text-center sm:text-left w-full sm:w-auto">
                        <h3 className="font-semibold text-foreground truncate">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center gap-2 bg-secondary/50 rounded-lg p-1 w-full sm:w-auto">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive shrink-0 hidden sm:flex"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:hidden border-destructive text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-destructive hover:text-destructive/90"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold text-xl mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-sm">
                    <span>Items</span>
                    <span>
                      {items.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-xs">Calculated at checkout</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between text-xl font-bold text-foreground mb-6">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 Secure payment powered by Paystack
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Checkout Dialog */}
      <Dialog open={showCheckoutDialog} onOpenChange={setShowCheckoutDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Order</DialogTitle>
            <DialogDescription>
              Enter your details to proceed with secure payment
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={customerEmail}
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                  setEmailError("");
                }}
                autoComplete="email"
              />
              {emailError && (
                <p className="text-xs text-destructive">{emailError}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                autoComplete="tel"
              />
            </div>
            <div className="pt-2">
              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="font-bold text-lg">
                    ₦{total.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  You will be redirected to Paystack to complete payment
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setShowCheckoutDialog(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handlePayNow}
            >
              Pay ₦{total.toLocaleString()}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Cart;
