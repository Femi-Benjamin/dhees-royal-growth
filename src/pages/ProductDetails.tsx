
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                    <Button asChild variant="outline">
                        <Link to="/products">Back to Products</Link>
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Breadcrumb / Back */}
                <div className="container mx-auto px-4 py-6">
                    <Link
                        to="/products"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Products
                    </Link>
                </div>

                <section className="container mx-auto px-4 pb-20">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-secondary/30 rounded-2xl overflow-hidden border border-border">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="mb-2">
                                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                                    {product.category}
                                </Badge>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1 text-gold">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-current" : "text-muted"}`} />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                            </div>

                            <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="space-y-6 mb-10">
                                <h3 className="font-semibold text-foreground">Key Benefits:</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {product.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="xl" className="flex-1" onClick={() => addToCart(product)}>
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="flex-1"
                                    onClick={() => window.open(`https://wa.me/27814437-4707?text=I'm interested in ${product.name}`, '_blank')}
                                >
                                    Buy on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="py-20 bg-secondary/20">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-display font-bold mb-10 text-center">You May Also Like</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedProducts.map(rp => (
                                    <div key={rp.id} className="group">
                                        <Link to={`/product/${rp.id}`} className="block">
                                            <div className="aspect-square bg-card rounded-xl overflow-hidden mb-4 border border-border/50 group-hover:border-primary/50 transition-all">
                                                <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                            </div>
                                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{rp.name}</h3>
                                            <p className="text-primary font-bold">{rp.price}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetails;
