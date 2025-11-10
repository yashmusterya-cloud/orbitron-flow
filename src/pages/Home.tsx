import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AIOrbit } from "@/components/AIOrbit";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Users,
  BarChart3,
  Sparkles,
  Play,
} from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

export default function Home() {
  const metrics = [
    { value: "10x", label: "Faster Responses", icon: Clock },
    { value: "85%", label: "Higher Win Rate", icon: TrendingUp },
    { value: "200+", label: "RFPs Monthly", icon: BarChart3 },
  ];

  const features = [
    {
      title: "AI Agent Orchestration",
      description: "Watch multiple specialized AI agents work together in real-time",
      icon: Sparkles,
      gradient: "from-agent-orchestrator to-agent-technical",
    },
    {
      title: "Autonomous Discovery",
      description: "24/7 multi-source monitoring with automatic qualification",
      icon: Target,
      gradient: "from-agent-sales to-secondary",
    },
    {
      title: "Technical Matching",
      description: "95% accuracy product catalog AI with confidence scoring",
      icon: Zap,
      gradient: "from-agent-technical to-primary",
    },
  ];

  const logos = [
    "Acme Corp",
    "TechGlobal",
    "IndustrialX",
    "ServicePro",
    "ManufactureCo",
    "ITSolutions",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                The Future of RFP Automation
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The First <span className="animated-gradient-text">Visual AI Agent</span> Platform
                for RFP Automation
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Watch multiple specialized AI agents work together to transform your RFP process
                from weeks to hours. Real-time orchestration, autonomous discovery, and
                unparalleled accuracy.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button variant="hero" size="xl" className="group">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch AI Agents in Action
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by manufacturing, IT, and professional service leaders
                </p>
                <div className="flex flex-wrap gap-6">
                  {logos.map((logo, idx) => (
                    <span
                      key={logo}
                      className={`text-sm font-semibold text-muted-foreground/60 hover:text-foreground transition-colors stagger-${idx + 1}`}
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex justify-center animate-fade-in-scale stagger-2">
              <AIOrbit size="lg" className="animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <Card
                key={metric.label}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <metric.icon className="w-12 h-12 mx-auto text-primary" />
                  <div className="text-5xl font-bold gradient-text">{metric.value}</div>
                  <p className="text-lg text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Multi-Agent AI Platform
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI Agents Working Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of specialized AI agents orchestrating your entire RFP workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={feature.title}
                className={`group hover-scale border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <Link
                    to="/platform"
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Real Results from Real Customers
            </h2>
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-12 space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">John Davidson</div>
                    <div className="text-sm text-muted-foreground">VP of Sales, TechGlobal</div>
                  </div>
                </div>
                <blockquote className="text-2xl leading-relaxed">
                  "RFP AI transformed our entire sales process. We went from spending 3 weeks per
                  RFP to just 2 days, with a <span className="text-primary font-semibold">92% win rate improvement</span>. The
                  AI agents handle everything—it's like having 10 experts working 24/7."
                </blockquote>
                <div className="flex justify-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">15x</div>
                    <div className="text-sm text-muted-foreground">Faster</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">92%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">200h</div>
                    <div className="text-sm text-muted-foreground">Saved Monthly</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary via-accent to-agent-orchestrator border-0">
            <CardContent className="p-16 text-center space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to See Your AI Agents in Action?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of enterprise teams transforming their RFP process with multi-agent
                AI orchestration
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/login">
                  <Button variant="secondary" size="xl" className="group">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/platform">
                  <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                    Schedule Private Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
