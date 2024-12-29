"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Recycle, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Trash2,
    title: "Récupération",
    description:
      "Collecte et tri des déchets plastiques auprès de nos partenaires.",
  },
  {
    icon: Recycle,
    title: "Transformation",
    description: "Conversion des déchets en matière première de qualité.",
  },
  {
    icon: Package,
    title: "Fabrication",
    description:
      "Création d'objets solides et élégants selon nos designs exclusifs.",
  },
];

export function Process() {
  const headerAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation(0.2);

  return (
    <section id="process" className="py-24 bg-muted/30">
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
            Processus de recyclage
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment nous transformons les déchets en objets du
            quotidien.
          </p>
        </div>

        <div
          ref={stepsAnimation.ref}
          className={`grid md:grid-cols-3 gap-8 opacity-0 transition-all duration-700 delay-200
            ${
              stepsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "translate-y-16"
            }`}
        >
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-12 pb-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full bg-primary p-4 text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-full w-full h-0.5 bg-primary/20 -z-10 hidden md:block" />
                )}

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
