import { Link } from "react-router-dom";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">RFP AI</span>
            </Link>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              The first visual AI agent platform for RFP automation. Transform your enterprise sales workflow with multi-agent orchestration.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/platform" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>AI Agent Ecosystem</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Industry Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/live-demo" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Live Demo</span>
                </Link>
              </li>
              <li>
                <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>How It Works</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/customers" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Customer Stories</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Resources</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 OrbitronFlow. Enterprise-grade RFP automation powered by multi-agent AI orchestration.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
