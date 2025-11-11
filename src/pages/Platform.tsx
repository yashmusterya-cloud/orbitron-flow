import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AIOrbit } from "@/components/AIOrbit";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  Zap,
  DollarSign,
  Target,
  Database,
  Users,
  BarChart3,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function Platform() {
  const agents = [
    {
      name: "Main Agent (Orchestrator)",
      icon: Sparkles,
      color: "agent-orchestrator",
      description: "Coordinates entire RFP workflow and delegates tasks to specialized agents",
      capabilities: [
        "Workflow coordination",
        "Task delegation",
        "Response synthesis",
        "Quality assurance",
      ],
    },
    {
      name: "Technical Agent",
      icon: Zap,
      color: "agent-technical",
      description: "Product specification matching with 95%+ accuracy",
      capabilities: [
        "Technical analysis",
        "Product catalog matching",
        "Requirement parsing",
        "Confidence scoring",
      ],
    },
    {
      name: "Pricing Agent",
      icon: DollarSign,
      color: "agent-pricing",
      description: "Automated cost calculations with market intelligence",
      capabilities: [
        "Cost calculations",
        "Pricing intelligence",
        "ROI analysis",
        "Budget optimization",
      ],
    },
    {
      name: "Sales Agent",
      icon: Target,
      color: "agent-sales",
      description: "Autonomous RFP discovery with intelligent qualification",
      capabilities: [
        "RFP discovery",
        "Auto-qualification",
        "Opportunity scoring",
        "Multi-source monitoring",
      ],
    },
  ];

  const integrations = [
    {
      title: "Content Library",
      description: "Centralized knowledge base with version control",
      icon: Database,
    },
    {
      title: "Team Collaboration",
      description: "Real-time workspace for distributed teams",
      icon: Users,
    },
    {
      title: "Analytics Dashboard",
      description: "Performance insights and success metrics",
      icon: BarChart3,
    },
    {
      title: "Security Center",
      description: "Enterprise-grade compliance and controls",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-agent-orchestrator/10 via-agent-technical/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Badge className="bg-agent-orchestrator/10 text-agent-orchestrator border-agent-orchestrator/20">
              Multi-Agent AI Platform
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              AI Agent <span className="animated-gradient-text">Orchestration</span> Visualized
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Watch specialized AI agents collaborate in real-time to handle your entire RFP
              workflow. The first platform to visualize multi-agent coordination.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/login">
                <Button variant="hero" size="xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">Watch Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Orbital Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Agent Ecosystem</h2>
            <p className="text-xl text-muted-foreground">
              Interactive visualization of our multi-agent orchestration system
            </p>
          </div>
          <div className="flex justify-center">
            <AIOrbit size="lg" className="animate-float" />
          </div>
        </div>
      </section>

      {/* Agent Deep Dives */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Specialized Agents
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Your AI Agent Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each agent is specialized for specific tasks, working together seamlessly
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {agents.map((agent, idx) => (
              <Card
                key={agent.name}
                className={`group hover-lift border-2 hover:border-${agent.color} transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-${agent.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <agent.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                      <p className="text-muted-foreground">{agent.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${agent.color}`} />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Platform Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Complete RFP Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage the entire RFP lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((feature, idx) => (
              <Card
                key={feature.title}
                className={`hover-scale border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-agent-orchestrator">
        <div className="container mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Experience Multi-Agent AI Today
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            See how our AI agents transform your RFP process from weeks to hours
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/login">
              <Button variant="secondary" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
