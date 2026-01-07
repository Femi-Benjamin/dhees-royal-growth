
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Resources = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 text-center">Hair Care Resources</h1>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Learn how to take care of your crown with our expert tips, guides, and frequency asked questions.
                    </p>

                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">Expert Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                                <div className="h-48 bg-secondary/30 rounded-t-xl overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1519016832205-07f9c9f0c239?auto=format&fit=crop&w=600&q=80" alt="Hair Growth" className="w-full h-full object-cover" />
                                </div>
                                <CardHeader>
                                    <CardTitle>5 Tips for Faster Hair Growth</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">Discover the natural secrets to stimulating your scalp and encouraging length retention...</p>
                                    <span className="text-primary font-medium text-sm">Read More</span>
                                </CardContent>
                            </Card>
                            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                                <div className="h-48 bg-secondary/30 rounded-t-xl overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b3e?auto=format&fit=crop&w=600&q=80" alt="Protective Styling" className="w-full h-full object-cover" />
                                </div>
                                <CardHeader>
                                    <CardTitle>Protective Styling 101</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">How to protect your ends and maintain moisture while looking fabulous...</p>
                                    <span className="text-primary font-medium text-sm">Read More</span>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How often should I use the Growth Oil?</AccordionTrigger>
                                <AccordionContent>
                                    We recommend applying the Royal Growth Oil to your scalp 3-4 times a week for best results. Massage it in gently for 5 minutes to stimulate blood flow.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Are your products suitable for all hair types?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Dhee's Organic products are formulated to be safe and effective for all hair textures, from straight to 4C coils.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                                <AccordionContent>
                                    Currently we ship nationwide within South Africa. We are working on expanding to international markets soon.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Can I return used products?</AccordionTrigger>
                                <AccordionContent>
                                    Due to hygiene reasons, we cannot accept returns on opened products. However, if you have an issue, please contact us and we will do our best to resolve it.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Resources;
