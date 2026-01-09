import { Crown, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-gold" />
              <h3 className="font-display text-xl font-bold text-foreground">
                Dhee's Organic
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Premium organic hair treatment solutions crafted from nature's
              finest ingredients.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/27814437-4707"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-smooth"
                >
                  Shop Products
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="hover:text-primary transition-smooth"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="hover:text-primary transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <a
                    href="tel:0814437-4707"
                    className="hover:text-primary transition-smooth"
                  >
                    0814 437 4707
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href="mailto:info@dheesorganic.co.za"
                  className="hover:text-primary transition-smooth"
                >
                  info@dheesorganic.co.za
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Nigeria</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground mb-2">
                Business Hours:
              </p>
              <p className="text-sm text-foreground">Mon - Sat: 9:00 - 18:00</p>
              <p className="text-sm text-foreground">Sun: 10:00 - 16:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="hidden lg:block">
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and hair care tips. Get 10% off
              your first order!
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary border-border"
              />
              <Button variant="hero" size="sm">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Dhee's Organic Hair Treatment. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
