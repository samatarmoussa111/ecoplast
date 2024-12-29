"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const products = [
  {
    title: "Chaise design éco-friendly",
    description:
      "Fabriquée à partir de plastique recyclé, durable et élégante.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80",
    stats: ["100% recyclé", "Design moderne", "Ultra résistante"],
  },
  {
    title: "Gobelet réutilisable",
    description: "Idéal pour une utilisation quotidienne.",
    image: "https://images.unsplash.com/photo-1581541234269-03d5d8576c0e?q=80",
    stats: ["Zéro déchet", "Lavable", "Durable"],
  },
  {
    title: "Table basse modulaire",
    description: "Un design innovant qui s'adapte à vos besoins.",
    image: "https://images.unsplash.com/photo-1565791380709-49e529c8b073?q=80",
    stats: ["Personnalisable", "Recyclable", "Moderne"],
  },
];

export function Products() {
  const headerAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation(0.2);

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4 sm:px-10">
        <div
          ref={headerAnimation.ref}
          className={`max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-700 delay-100
            ${
              headerAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Produits phares
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez notre gamme de produits éco-conçus, alliant style et
            responsabilité environnementale.
          </p>
        </div>

        <div
          ref={productsAnimation.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-all duration-700 delay-200
            ${
              productsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "translate-y-16"
            }`}
        >
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.stats.map((stat, statIndex) => (
                    <span
                      key={statIndex}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
