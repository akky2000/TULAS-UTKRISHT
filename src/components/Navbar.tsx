import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Core Team", path: "/core-team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-2xl shadow-[0_0_30px_rgba(234,179,8,0.3)] border-b border-primary/30" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
         <Link
  to="/"
  className="inline-block hover:scale-110 transition-all duration-300"
>
 
  <picture>
    <img
      src="/images/FINAL UTKRISHT 2025.gif"
      alt="UTKRISHT 2025 Logo"
      className="h-20 w-auto select-none bg-clip-text text-transparent 
                 bg-gradient-to-r from-primary via-secondary to-primary 
                 animate-shimmer tracking-wider 
                 dark:from-secondary dark:via-primary dark:to-secondary"
    />
  </picture>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-tech font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform transition-transform duration-300 shadow-[0_0_10px_rgba(234,179,8,0.5)] ${
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 text-muted-foreground hover:text-foreground ml-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9-4Zy_i23aE0xzXDcwuTKZ4aZ32vl0VwEOFi-NLazDhGMEQ/viewform">
              <Button variant="hero" className="ml-2 font-tech font-semibold tracking-wide shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.7)] transition-all duration-300">
                REGISTER NOW
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-primary hover:bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in backdrop-blur-xl bg-background/95 rounded-b-lg border-b border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-tech font-medium tracking-wide transition-all duration-300 mx-2 my-1 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/20 border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 py-3 mt-2">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Link to="/register" onClick={() => setIsOpen(false)} className="flex-1 ml-4">
                <Button variant="hero" className="w-full font-tech font-semibold tracking-wide">
                  REGISTER NOW
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
