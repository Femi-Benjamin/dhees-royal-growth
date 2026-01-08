import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

const articles: Article[] = [
  {
    id: "hair-growth",
    title: "5 Tips for Faster Hair Growth",
    excerpt:
      "Discover the natural secrets to stimulating your scalp and encouraging length retention...",
    image:
      "https://plus.unsplash.com/premium_vector-1711987767980-dd7ece76c520?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    content: `Achieving faster hair growth is a journey that requires patience, consistency, and the right approach. Here are 5 proven tips to help you achieve your hair goals:

1. **Regular Scalp Massage** - Massaging your scalp for 5-10 minutes daily increases blood flow to hair follicles, promoting growth and nourishment.

2. **Deep Conditioning Treatments** - Use a deep conditioning treatment like our Royal Growth Balm 2-3 times weekly to strengthen and nourish your strands from root to tip.

3. **Minimize Heat Styling** - Reduce heat damage by air-drying when possible and using heat protectant products when necessary.

4. **Stay Hydrated** - Drink plenty of water and maintain a balanced diet rich in vitamins, minerals, and protein to support healthy hair growth.

5. **Be Consistent with Products** - Use quality, natural hair care products consistently. Results typically appear after 4-6 weeks of regular use.

Remember, hair growth is a marathon, not a sprint. Be patient with your hair and celebrate small victories along the way!`,
  },
  {
    id: "protective-styling",
    title: "Protective Styling 101",
    excerpt:
      "How to protect your ends and maintain moisture while looking fabulous...",
    image:
      "https://plus.unsplash.com/premium_vector-1683141339177-429a14fd655a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcnxlbnwwfHwwfHx8MA%3D%3D",
    content: `Protective styling is essential for maintaining healthy, growing hair. Learn how to style your hair while keeping it protected:

**What is Protective Styling?**
Protective styling involves hairstyles that tuck away your hair ends and reduce manipulation, allowing your hair to grow while staying protected.

**Popular Protective Styles:**
- Braids (cornrows, box braids, Senegalese twists)
- Buns and updos
- Wigs and weaves (when done correctly)
- Twist-outs and braid-outs

**Best Practices:**
1. Keep styles loose - tight styles can cause tension alopecia
2. Moisturize regularly - protective styles need moisture maintenance
3. Limit style duration - don't keep the same style for more than 4-6 weeks
4. Use our Growth Oil - apply to scalp and ends regularly for nourishment
5. Protect your edges - use edge control and massage gently

**Maintenance Tips:**
- Wrap your hair at night to reduce frizz
- Spritz with water and light oils to maintain moisture
- Avoid heavy products that build up
- Take breaks between styles to let your hair breathe

Protective styling combined with quality products like Dhee's Royal Growth Oil creates the perfect environment for healthy hair growth!`,
  },
  {
    id: "scalp-health",
    title: "The Science of Scalp Health",
    excerpt:
      "Understanding why scalp health is the foundation of beautiful, growing hair...",

    image:
      "https://plus.unsplash.com/premium_vector-1711987772726-64785d1bade8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpcnxlbnwwfHwwfHx8MA%3D%3D",
    content: `A healthy scalp is the foundation for beautiful, strong, growing hair. Let's dive into the science:

**Why Scalp Health Matters:**
Your scalp is the ecosystem where hair grows. Just like you wouldn't expect plants to thrive in poor soil, you can't expect healthy hair from an unhealthy scalp.

**Common Scalp Issues:**
- Dandruff - caused by dry scalp or fungal buildup
- Scalp acne - from excess sebum and bacteria
- Itching and inflammation - often from product buildup
- Hair loss - can result from poor scalp circulation

**Solutions for a Healthy Scalp:**
1. **Regular Cleansing** - Remove buildup with gentle sulfate-free shampoos
2. **Scalp Massage** - Increase blood flow with consistent massage
3. **Natural Oils** - Use our Chebe-infused Growth Oil to nourish deeply
4. **Hydration** - Keep your scalp moisturized with water and oils
5. **Minimize Heat** - Reduce heat exposure to prevent scalp irritation

**The Dhee's Advantage:**
Our products are specifically formulated with Chebe powder, hemp seed oil, and essential vitamins to address common scalp concerns naturally. Regular use promotes a healthy scalp ecosystem that supports vibrant hair growth.

Invest in your scalp, and your hair will thank you!`,
  },
];

const Resources = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 text-center">
            Hair Care Resources
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Learn how to take care of your crown with our expert tips, guides,
            and frequently asked questions.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Expert Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/30 overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-grow text-sm">
                      {article.excerpt}
                    </p>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => setSelectedArticle(article)}
                      className="w-fit"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How often should I use the Growth Oil?
                </AccordionTrigger>
                <AccordionContent>
                  We recommend applying the Royal Growth Oil to your scalp 3-4
                  times a week for best results. Massage it in gently for 5
                  minutes to stimulate blood flow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Are your products suitable for all hair types?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Dhee's Organic products are formulated to be safe and
                  effective for all hair textures, from straight to 4C coils.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you offer international shipping?
                </AccordionTrigger>
                <AccordionContent>
                  Currently we ship nationwide within South Africa. We are
                  working on expanding to international markets soon.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I return used products?</AccordionTrigger>
                <AccordionContent>
                  Due to hygiene reasons, we cannot accept returns on opened
                  products. However, if you have an issue, please contact us and
                  we will do our best to resolve it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What makes Dhee's products different?
                </AccordionTrigger>
                <AccordionContent>
                  Dhee's Royal Growth uses 100% organic, chemical-free
                  ingredients including Chebe powder, hemp seed oil, and
                  essential vitamins. Each product is hand-blended with
                  ethically sourced ingredients for maximum potency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  How long before I see results?
                </AccordionTrigger>
                <AccordionContent>
                  Most customers see visible results within 4-6 weeks of
                  consistent use. Hair growth is a journey - results include
                  stronger, shinier hair and reduced breakage before visible
                  length.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      {/* Article Detail Modal */}
      <Dialog
        open={!!selectedArticle}
        onOpenChange={(open) => !open && setSelectedArticle(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="relative w-full mb-4">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <DialogTitle className="text-2xl">
                  {selectedArticle.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {selectedArticle.content}
              </div>
              <div className="mt-6 flex gap-2">
                <Button asChild className="flex-1">
                  <a href="/products">Shop Now</a>
                </Button>
                <DialogClose asChild>
                  <Button variant="outline" className="flex-1">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Resources;
