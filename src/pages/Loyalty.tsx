import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Gift, Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Loyalty = () => {
  const [email, setEmail] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast.success(
      "Welcome to Dhee's Royalty! We've sent a welcome gift to your email."
    );
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Crown className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Join the Royal Family
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive rewards, early access to new products, and special
            VIP treatment with our loyalty program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-secondary/30 border-primary/20 text-center">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Percent className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Member Discounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Save 10% on every order and get exclusive deals delivered to
                your inbox.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30 border-primary/20 text-center">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Birthday Gifts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive a special treat from us to celebrate your special day in
                royal style.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30 border-primary/20 text-center">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>VIP Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Be the first to shop new launches and limited edition
                collections.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to be treated like Royalty?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join over 1,000 members and start earning rewards today.
          </p>

          <form
            onSubmit={handleJoin}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="hero">
              Join Now
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            By joining, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Loyalty;
