"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const headerAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation(0.2);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="py-24">
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
            Parlons ensemble
          </h2>
          <p className="text-lg text-muted-foreground">
            Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <Card
          ref={formAnimation.ref}
          className={`max-w-lg mx-auto opacity-0 transition-all duration-700 delay-200
            ${
              formAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "translate-y-16"
            }`}
        >
          <CardHeader>
            <CardTitle>Formulaire de contact</CardTitle>
            <CardDescription>
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" required />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
