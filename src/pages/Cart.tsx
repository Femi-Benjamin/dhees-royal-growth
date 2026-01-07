
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
    const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

    const handleCheckout = () => {
        // Generate WhatsApp message
        const lineItems = items.map(item => `- ${item.name} x ${item.quantity} (N${item.price * item.quantity})`).join('%0A');
        const totalMsg = `Total: N${total}`;
        const message = `Hello, I would like to place an order:%0A%0A${lineItems}%0A%0A${totalMsg}%0A%0APlease confirm availability.`;

        window.open(`https://wa.me/278144374707?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
                        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                        <p className="text-muted-foreground mb-6">Looks like you haven't added any products yet.</p>
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
                                        <div key={item.id} className="flex gap-4 items-center">
                                            <div className="h-20 w-20 bg-secondary rounded-lg overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                                                <p className="text-primary font-bold">N {item.price}</p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </Button>
                                                <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </Button>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-muted-foreground hover:text-destructive shrink-0"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button variant="ghost" className="text-destructive hover:text-destructive/90" onClick={clearCart}>
                                Clear Cart
                            </Button>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                                <h3 className="font-semibold text-xl mb-4">Order Summary</h3>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span>N {total}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Delivery</span>
                                        <span>Calculated via WhatsApp</span>
                                    </div>
                                </div>
                                <Separator className="my-4" />
                                <div className="flex justify-between text-xl font-bold text-foreground mb-6">
                                    <span>Total</span>
                                    <span>N {total}</span>
                                </div>
                                <Button size="lg" className="w-full" onClick={handleCheckout}>
                                    Checkout on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <p className="text-xs text-muted-foreground text-center mt-4">
                                    Secure checkout process handled directly with our team.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
