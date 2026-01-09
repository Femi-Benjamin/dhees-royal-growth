import { Crown, Leaf, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/dhees.jpeg"; // Reusing an existing image for now, user might want to swap

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={aboutImage}
                alt="Dhee's Organic Founder"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl z-0" />
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="text-gold w-8 h-8" />
              <span className="text-gold font-bold tracking-wider uppercase text-sm">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Crafted for <span className="text-primary">Royalty</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Dhee's Royal Growth, we believe that your hair is your crown
                and it deserves to be treated with the utmost respect and care.
              </p>
              <p>
                Founded with a passion for natural healing and organic beauty,
                our journey began in a small kitchen with a big dream: to create
                hair care solutions that are free from harsh chemicals and full
                of nature's goodness.
              </p>
              <p>
                Every bottle of our Growth Oil and Treatment Balm is
                hand-blended using ethically sourced ingredients like Chebe
                powder, Hemp seed oil, and essential vitamins that nourish your
                scalp and strengthen your strands from root to tip.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col gap-2">
                <div className="bg-secondary/50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Leaf className="text-primary w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground">100% Organic</h4>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-secondary/50 w-12 h-12 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <h4 className="font-bold text-foreground">Quality Assured</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
