import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-10 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-in">
            Transformez les déchets en objets du quotidien
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground animate-in"
            style={{ animationDelay: "150ms" }}
          >
            Donnez une seconde vie à vos déchets grâce à nos solutions
            éco-responsables
          </p>
          <div
            className="flex justify-center gap-4 animate-in"
            style={{ animationDelay: "300ms" }}
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="#about">En savoir plus</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="#contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/20 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
