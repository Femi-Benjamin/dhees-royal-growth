import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dheesImage from "@/assets/dhees.jpeg";
import heroMobileImage from "@/assets/hero-products.jpg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [shouldLoadBg, setShouldLoadBg] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShouldLoadBg(true);
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadBg) return;
    const img = new Image();
    img.src = dheesImage;
    img.onload = () => setBgLoaded(true);
  }, [shouldLoadBg]);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with lazy-load + overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden
        style={{
          backgroundImage: bgLoaded
            ? `url(${dheesImage})`
            : undefined,
        }}
      >
        <style>{`
          @media (max-width: 640px) {
            #hero-bg {
              background-image: url(${heroMobileImage}) !important;
            }
          }
          @media (min-width: 641px) {
            #hero-bg {
              background-image: url(${dheesImage}) !important;
            }
          }
        `}</style>
        <div id="hero-bg" className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: bgLoaded ? `url(${dheesImage})` : undefined }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            RESTORE YOUR CROWN WITH{' '}
            <span className="text-primary drop-shadow-glow">ORGANIC</span>{' '}
            HAIR CARE
          </h1>

          <p className="text-xl sm:text-2xl text-cream/90 mb-8 max-w-2xl">
            100% Chemical-free treatments designed to promote natural growth, strength, and shine. Experience the royal standard of hair health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">Shop Products</Button>
            <Button variant="outline" size="xl">Book Consultation</Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>100% Chemical-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Natural Plant Oils</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
