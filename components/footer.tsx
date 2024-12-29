import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo_ecoplast.png"
                alt="EcoPlast Logo"
                width={120}
                height={40}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Engagés dans la transformation des déchets plastiques en objets du
              quotidien, nous œuvrons pour un avenir plus durable.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "À propos" },
                { href: "#products", label: "Nos Créations" },
                { href: "#process", label: "Processus" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+33123456789"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  01 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ecoplast.fr"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  contact@ecoplast.fr
                </a>
              </li>
              <li>
                <address className="text-sm text-muted-foreground not-italic inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  123 rue du Recyclage,
                  <br />
                  75001 Paris, France
                </address>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              {[
                {
                  href: "https://facebook.com",
                  icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://instagram.com",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://linkedin.com",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EcoPlast. Tous droits réservés.
            </p>
            <div className="flex gap-8">
              {[
                { href: "/privacy", label: "Politique de confidentialité" },
                { href: "/terms", label: "Conditions d'utilisation" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
