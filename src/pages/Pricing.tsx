import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight, Shield, Zap, Users } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$89",
      period: "per user/month",
      description: "Perfect for small teams getting started with AI automation",
      features: [
        "1 AI Agent (Main Orchestrator)",
        "Up to 20 RFPs per month",
        "Basic content library",
        "Email support",
        "Standard response templates",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "from-muted to-muted/50",
    },
    {
      name: "Professional",
      price: "$159",
      period: "per user/month",
      description: "Full multi-agent access with advanced analytics",
      features: [
        "All 4 AI Agents (Full Orchestra)",
        "Unlimited RFPs",
        "Advanced content library with versioning",
        "Priority support (24/7)",
        "Custom response templates",
        "Advanced analytics & reporting",
        "Team collaboration workspace",
        "API access",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-primary via-accent to-agent-orchestrator",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "Full platform with dedicated support and customization",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom AI agent training",
        "On-premise deployment option",
        "SSO & advanced security",
        "Custom SLA",
        "White-glove onboarding",
        "Unlimited users",
        "Priority feature requests",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-agent-technical to-agent-sales",
    },
  ];

  const complianceBadges = [
    { label: "SOC 2 Type II", icon: Shield },
    { label: "GDPR Compliant", icon: Shield },
    { label: "HIPAA Ready", icon: Shield },
    { label: "ISO 27001", icon: Shield },
  ];

  const allFeatures = [
    {
      category: "AI Agents",
      starter: ["1 Agent", "Basic orchestration"],
      professional: ["All 4 Agents", "Advanced orchestration", "Custom workflows"],
      enterprise: ["All Professional features", "Custom agent training", "Dedicated resources"],
    },
    {
      category: "RFP Volume",
      starter: ["20 RFPs/month"],
      professional: ["Unlimited RFPs"],
      enterprise: ["Unlimited RFPs", "Priority processing"],
    },
    {
      category: "Support",
      starter: ["Email support", "Business hours"],
      professional: ["24/7 Priority support", "Dedicated Slack channel"],
      enterprise: ["Dedicated account manager", "Custom SLA", "Phone support"],
    },
    {
      category: "Security",
      starter: ["Standard encryption", "Basic compliance"],
      professional: ["Advanced encryption", "SOC 2 Type II", "GDPR"],
      enterprise: ["On-premise option", "SSO", "Custom security policies"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Choose Your <span className="animated-gradient-text">AI Agent</span> Plan
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Flexible pricing that grows with your team. Start free, upgrade anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <Card
                key={plan.name}
                className={`relative hover-lift border-2 transition-all animate-fade-in-up stagger-${idx + 1} ${
                  plan.popular ? "border-primary shadow-2xl scale-105" : "hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground">/{plan.period.split("/")[1]}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                  </div>

                  <Link to={plan.name === "Enterprise" ? "#contact" : "/login"}>
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>

                  <div className="space-y-3 pt-6 border-t border-border">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise Security & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              Built with security and compliance at the core
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {complianceBadges.map((badge, idx) => (
              <Card
                key={badge.label}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-scale stagger-${idx + 1}`}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-lg">{badge.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Feature Comparison
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Compare Plans in Detail
            </h2>
          </div>

          <Card className="border-2">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left p-6 font-bold">Feature Category</th>
                      <th className="text-left p-6 font-bold">Starter</th>
                      <th className="text-left p-6 font-bold">Professional</th>
                      <th className="text-left p-6 font-bold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((feature, idx) => (
                      <tr
                        key={feature.category}
                        className={`${idx !== allFeatures.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <td className="p-6 font-semibold">{feature.category}</td>
                        <td className="p-6">
                          <ul className="space-y-2">
                            {feature.starter.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-6 bg-primary/5">
                          <ul className="space-y-2">
                            {feature.professional.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-6">
                          <ul className="space-y-2">
                            {feature.enterprise.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes! You can upgrade or downgrade at any time. Changes take effect immediately.",
              },
              {
                q: "What's included in the free trial?",
                a: "14-day free trial of Professional plan with all 4 AI agents and unlimited RFPs.",
              },
              {
                q: "Do you offer annual discounts?",
                a: "Yes, annual plans receive 20% discount. Contact sales for details.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, ACH transfers, and purchase orders for Enterprise.",
              },
            ].map((faq, idx) => (
              <Card
                key={faq.q}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary via-accent to-agent-orchestrator border-0">
            <CardContent className="p-16 text-center space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of teams automating RFPs with AI agents
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/login">
                  <Button variant="secondary" size="xl">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
