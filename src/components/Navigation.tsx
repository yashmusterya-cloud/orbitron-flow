import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Demo RFP", href: "/live-demo" },
  { name: "Final Output", href: "/final-response" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path.startsWith("#")) return false;
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") || href.includes("#")) {
      e.preventDefault();
      // If we're not on home page and link is to home section, navigate first
      if (location.pathname !== "/" && href.includes("#")) {
        window.location.href = href;
        return;
      }
      const hash = href.includes("#") ? href.split("#")[1] : href.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">RFP AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.href.startsWith("#") || link.href.includes("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    "text-muted-foreground",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    isActive(link.href) ? "text-primary" : "text-muted-foreground",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive(link.href) && "after:scale-x-100"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/login">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            {navLinks.map((link) => (
              link.href.startsWith("#") || link.href.includes("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors cursor-pointer",
                    "text-muted-foreground"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
