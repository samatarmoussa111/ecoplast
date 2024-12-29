"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Recycle, Leaf, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const headerAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-muted/30">
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
            Notre mission
          </h2>
          <p className="text-lg text-muted-foreground">
            Chez EcoPlast, nous nous engageons à transformer les déchets
            plastiques en objets utiles tout en réduisant notre empreinte
            écologique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={imageAnimation.ref}
            className={`relative h-[400px] rounded-lg overflow-hidden opacity-0 transition-all duration-700 delay-200
              ${
                imageAnimation.isVisible
                  ? "opacity-100 translate-x-0"
                  : "-translate-x-8"
              }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80"
              alt="Atelier de recyclage"
              fill
              className="object-cover"
            />
          </div>

          <div
            ref={cardsAnimation.ref}
            className={`space-y-8 opacity-0 transition-all duration-700 delay-300
              ${
                cardsAnimation.isVisible
                  ? "opacity-100 translate-x-0"
                  : "translate-x-8"
              }`}
          >
            <div className="grid gap-6">
              {[
                {
                  icon: Recycle,
                  title: "Recyclage innovant",
                  description:
                    "Nous utilisons des technologies de pointe pour transformer les déchets plastiques en matière première de qualité.",
                },
                {
                  icon: Leaf,
                  title: "Impact environnemental",
                  description:
                    "Chaque produit créé contribue à réduire la pollution plastique et à préserver notre environnement.",
                },
                {
                  icon: Heart,
                  title: "Design durable",
                  description:
                    "Nos créations allient esthétique et durabilité pour un impact positif sur le long terme.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
