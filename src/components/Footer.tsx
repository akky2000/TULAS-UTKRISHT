import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-card/80 to-background/90 backdrop-blur-2xl border-t-2 border-primary/30 shadow-[0_-10px_40px_rgba(234,179,8,0.2)]">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4 tracking-wider animate-shimmer bg-[length:200%_auto]">
              UTKRISHT 2025
            </h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              The ultimate tech fest bringing together innovators, creators, and dreamers from around the globe.
            </p>
            {/* Accent line */}
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-tech font-bold text-foreground mb-6 tracking-wide uppercase text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block font-light">
                  → About
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block font-light">
                  → Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block font-light">
                  → Gallery
                </Link>
              </li>
              <li>
                <Link to="/core-team" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block font-light">
                  → Core Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-tech font-bold text-foreground mb-6 tracking-wide uppercase text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="mt-0.5 text-primary group-hover:text-secondary transition-colors flex-shrink-0" />
                <span className="font-light">Tula's Institute, Dhoolkot, Post Office: Selaqui, Chakrata Road, Dehradun- 248011 Uttarakhand</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-primary group-hover:text-secondary transition-colors flex-shrink-0" />
                <span className="font-light">0135-2699300</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-primary group-hover:text-secondary transition-colors flex-shrink-0" />
                <span className="font-light">info@tulas.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-tech font-bold text-foreground mb-6 tracking-wide uppercase text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/tulasinstitutedehradun/"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook size={22} className="text-primary group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://twitter.com/tulas_institute"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 hover:border-secondary hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={22} className="text-secondary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/tulasinstitutedehradun/"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={22} className="text-primary group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/school/tula's-institute/"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 hover:border-secondary hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-secondary group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-light">
            &copy; 2025 <span className="text-primary font-tech font-semibold">UTKRISHT</span>. All rights reserved. 
            <span className="mx-2">|</span>
            Designed by Team <span className="text-primary font-semibold">ACM TULAS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
