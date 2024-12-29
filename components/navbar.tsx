"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_ecoplast.png"
              alt="EcoPlast Logo"
              width={120}
              height={40}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              À propos
            </Link>
            <Link
              href="#products"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Nos créations
            </Link>
            <Link
              href="#process"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Processus
            </Link>
            <Button asChild>
              <Link href="#contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="#products"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nos créations
              </Link>
              <Link
                href="#process"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Processus
              </Link>
              <Button asChild className="w-full">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
