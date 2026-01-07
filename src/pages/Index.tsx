import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import BookingPreview from "@/components/BookingPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <FeaturedProducts />
        <Testimonials />
        <BookingPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
