import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "@/hooks/useCart";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground">
              Our Collection
            </h1>
            <p className="text-muted-foreground mt-2">
              Discover the power of nature for your hair
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            <Filter className="w-4 h-4 text-primary shrink-0" />
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className="whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-border/50 hover:border-primary/50 transition-smooth group flex flex-col h-full"
            >
              <CardHeader className="p-0">
                <div className="aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-smooth bg-gradient-to-t from-black/80 to-transparent">
                    <Button asChild size="sm" className="w-full">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <div className="text-xs text-primary mb-2 font-medium uppercase tracking-wider">
                  {product.category}
                </div>
                <h3
                  className="font-semibold text-lg text-foreground mb-2 line-clamp-1"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-full ${
                        i < Math.floor(product.rating) ? "bg-gold" : "bg-muted"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0 mt-auto flex items-center justify-between gap-3">
                <span className="text-xl font-bold text-primary">
                  {product.price}
                </span>
                <Button
                  onClick={() => addToCart(product)}
                  size="icon"
                  variant="secondary"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
