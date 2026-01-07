import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const BookingPreview = () => {
  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Get personalized hair care advice from our experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Salon Booking */}
            <Card className="bg-gradient-card border-primary/50 hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">In-Salon</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Visit our salon for a comprehensive hair assessment and
                  treatment
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Full hair and scalp analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Personalized treatment plan</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Complimentary scalp massage</span>
                  </li>
                </ul>
                <Button asChild variant="hero" className="w-full">
                  <Link to="/booking">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book In-Salon
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Online Booking */}
            <Card className="bg-gradient-card border-primary/50 hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Online</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Connect with our experts via video call from anywhere
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Convenient video consultation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Product recommendations</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Follow-up support via WhatsApp</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/booking">
                    <Video className="h-4 w-4 mr-2" />
                    Book Online
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer to speak with us directly?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://wa.me/27814437-4707?text=Hi, I would like to book a consultation",
                    "_blank"
                  )
                }
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "tel:0814437-4707")}
              >
                Call 0814 437 4707
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPreview;
