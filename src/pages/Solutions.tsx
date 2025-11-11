import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ROICalculator } from "@/components/ROICalculator";
import {
  Factory,
  Code,
  Briefcase,
  Building2,
  FileText,
  Shield,
  MessageSquare,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  const industries = [
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial",
      icon: Factory,
      challenge: "Complex technical specs across diverse product lines",
      solution: "AI agents handle multi-SKU technical matching with 95% accuracy",
      metrics: ["15x faster", "92% win rate", "200+ RFPs/month"],
    },
    {
      id: "it-services",
      name: "IT Services & Software",
      icon: Code,
      challenge: "Rapidly changing technology requirements and certifications",
      solution: "Technical agent maintains current certifications and capabilities",
      metrics: ["10x faster", "88% win rate", "150+ RFPs/month"],
    },
    {
      id: "professional",
      name: "Professional Services",
      icon: Briefcase,
      challenge: "Highly customized proposals requiring deep expertise",
      solution: "Orchestrator agent coordinates subject matter experts seamlessly",
      metrics: ["12x faster", "85% win rate", "180+ RFPs/month"],
    },
    {
      id: "financial",
      name: "Financial Services",
      icon: Building2,
      challenge: "Strict compliance and security documentation requirements",
      solution: "Security-focused agents ensure regulatory compliance automatically",
      metrics: ["8x faster", "90% win rate", "120+ RFPs/month"],
    },
  ];

  const useCases = [
    {
      title: "Large Enterprise RFPs",
      description: "Multi-phase projects requiring coordination across departments",
      icon: FileText,
      benefits: [
        "Automated task delegation",
        "Real-time status tracking",
        "Department coordination",
      ],
    },
    {
      title: "Security Questionnaires & DDQs",
      description: "Comprehensive security and compliance documentation",
      icon: Shield,
      benefits: [
        "Pre-approved responses",
        "Compliance automation",
        "Audit trail maintenance",
      ],
    },
    {
      title: "Sales Proposals & Pitches",
      description: "Competitive proposals with compelling narratives",
      icon: MessageSquare,
      benefits: [
        "Win theme generation",
        "Competitive intelligence",
        "Persuasive content",
      ],
    },
    {
      title: "Team Collaboration",
      description: "Distributed teams working on complex responses",
      icon: Users,
      benefits: [
        "Real-time collaboration",
        "Version control",
        "Role-based access",
      ],
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
              Industry Solutions
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Built for Your <span className="animated-gradient-text">Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specialized AI agents adapted to the unique challenges of your sector. From
              manufacturing to financial services, we understand your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <industry.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{industry.name}</span>
                  <span className="md:hidden">
                    {industry.name.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent
                key={industry.id}
                value={industry.id}
                className="animate-fade-in-scale"
              >
                <Card className="border-2">
                  <CardContent className="p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <industry.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-4">{industry.name}</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                                Industry Challenge
                              </h4>
                              <p className="text-lg">{industry.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                                RFP AI Solution
                              </h4>
                              <p className="text-lg text-primary font-medium">
                                {industry.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Link to="/customers">
                          <Button variant="hero" size="lg">
                            View Customer Stories
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold">Results You Can Expect</h4>
                        <div className="grid gap-4">
                          {industry.metrics.map((metric) => (
                            <Card key={metric} className="border-2 hover:border-primary/50 transition-all">
                              <CardContent className="p-6 flex items-center gap-4">
                                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                                <span className="text-2xl font-bold">{metric}</span>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Use Cases
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Every RFP Scenario Covered
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From enterprise RFPs to security questionnaires, our AI agents adapt to any format
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <Card
                key={useCase.title}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
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

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              ROI Calculator
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              See Your Potential <span className="animated-gradient-text">Savings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate how much time and money RFP AI can save your team
            </p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary via-accent to-agent-orchestrator border-0">
            <CardContent className="p-16 text-center space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Find Your Industry Solution
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Talk to our team to discover how RFP AI adapts to your specific needs
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/login">
                  <Button variant="secondary" size="xl">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                    Schedule Demo
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
