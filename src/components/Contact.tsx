import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-charcoal text-cream relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-cream">Get in Touch</h2>
                    <p className="text-cream/70 max-w-2xl mx-auto">
                        Have questions about our products or want to book a consultation? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8 bg-card/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 p-2 md:p-0">
                    {/* Contact Info Side */}
                    <div className="md:col-span-2 bg-primary/20 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <h3 className="font-display text-2xl font-bold mb-6 text-cream">Contact Information</h3>
                            <p className="text-cream/70 mb-8">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="text-gold w-6 h-6 mt-1" />
                                    <div>
                                        <h5 className="font-bold text-cream">Phone</h5>
                                        <p className="text-cream/70">0814 437 4707</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-gold w-6 h-6 mt-1" />
                                    <div>
                                        <h5 className="font-bold text-cream">Email</h5>
                                        <p className="text-cream/70">info@dheesorganic.co.za</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-gold w-6 h-6 mt-1" />
                                    <div>
                                        <h5 className="font-bold text-cream">Location</h5>
                                        <p className="text-cream/70">South Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            {/* Socials placeholder */}
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="md:col-span-3 p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-cream/80">First Name</label>
                                    <Input placeholder="Jane" className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus-visible:ring-gold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-cream/80">Last Name</label>
                                    <Input placeholder="Doe" className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus-visible:ring-gold" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-cream/80">Email</label>
                                <Input type="email" placeholder="jane@example.com" className="bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus-visible:ring-gold" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-cream/80">Message</label>
                                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-white/5 border-white/10 text-cream placeholder:text-cream/30 focus-visible:ring-gold" />
                            </div>

                            <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-bold">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
