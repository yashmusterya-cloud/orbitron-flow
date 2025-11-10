import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Quote, TrendingUp, Clock, Target, ArrowRight, Star } from "lucide-react";

export default function Customers() {
  const caseStudies = [
    {
      company: "ManufactureCo Global",
      industry: "Manufacturing & Industrial",
      challenge: "300+ RFPs annually with complex technical specifications across 50+ product lines",
      solution: "Deployed all 4 AI agents with custom product catalog integration",
      results: [
        { metric: "15x", label: "Faster Responses" },
        { metric: "92%", label: "Win Rate" },
        { metric: "200h", label: "Saved Monthly" },
      ],
      quote: "RFP AI didn't just speed up our process—it transformed how we compete. Our win rate jumped 40 points in 6 months.",
      author: "Sarah Johnson",
      role: "VP of Sales Operations",
      gradient: "from-primary to-accent",
    },
    {
      company: "TechSolutions Enterprise",
      industry: "IT Services & Software",
      challenge: "Rapidly changing certifications and technical requirements in cloud services sector",
      solution: "Technical Agent with automated certification tracking and compliance verification",
      results: [
        { metric: "10x", label: "Faster Responses" },
        { metric: "88%", label: "Win Rate" },
        { metric: "150", label: "RFPs Monthly" },
      ],
      quote: "The Technical Agent's accuracy is phenomenal. It knows our capabilities better than most of our own team members.",
      author: "Michael Chen",
      role: "Director of Business Development",
      gradient: "from-agent-technical to-agent-orchestrator",
    },
    {
      company: "Professional Services Group",
      industry: "Professional Services",
      challenge: "Highly customized proposals requiring deep subject matter expertise coordination",
      solution: "Orchestrator Agent managing cross-functional SME contributions",
      results: [
        { metric: "12x", label: "Faster Responses" },
        { metric: "85%", label: "Win Rate" },
        { metric: "$2.4M", label: "Revenue Impact" },
      ],
      quote: "We can now respond to RFPs we would have previously declined. The AI orchestrates our experts seamlessly.",
      author: "Jennifer Martinez",
      role: "Managing Partner",
      gradient: "from-agent-sales to-secondary",
    },
  ];

  const testimonials = [
    {
      quote: "Game-changing technology. Our entire sales team is more productive.",
      author: "David Park",
      role: "CRO, IndustrialX",
      rating: 5,
    },
    {
      quote: "The ROI was clear within the first month. Best investment we've made.",
      author: "Lisa Anderson",
      role: "VP Sales, ServicePro",
      rating: 5,
    },
    {
      quote: "Finally, a platform that understands the complexity of enterprise RFPs.",
      author: "Robert Taylor",
      role: "Director, ITSolutions",
      rating: 5,
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
              Customer Success Stories
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Real Results from <span className="animated-gradient-text">Real Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how enterprise teams are transforming their RFP process with multi-agent AI
              orchestration
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {caseStudies.map((study, idx) => (
            <Card
              key={study.company}
              className={`border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
            >
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <Badge className="bg-muted mb-4">{study.industry}</Badge>
                      <h2 className="text-3xl font-bold mb-2">{study.company}</h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          Challenge
                        </h3>
                        <p className="text-lg">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                          Solution
                        </h3>
                        <p className="text-lg text-primary font-medium">{study.solution}</p>
                      </div>
                    </div>

                    <Card className={`bg-gradient-to-br ${study.gradient} border-0`}>
                      <CardContent className="p-6 text-white space-y-4">
                        <Quote className="w-8 h-8 opacity-50" />
                        <blockquote className="text-xl leading-relaxed">"{study.quote}"</blockquote>
                        <div className="pt-2">
                          <div className="font-semibold">{study.author}</div>
                          <div className="text-sm opacity-90">{study.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold">Results</h3>
                    <div className="space-y-4">
                      {study.results.map((result) => (
                        <Card key={result.label} className="border-2">
                          <CardContent className="p-6 text-center space-y-2">
                            <div className="text-4xl font-bold gradient-text">
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Customer Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Loved by Sales Teams Everywhere
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.author}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Trusted by Industry Leaders
            </Badge>
            <h2 className="text-3xl font-bold">
              Join 500+ Companies Automating RFPs with AI
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "Acme Corp",
              "TechGlobal",
              "IndustrialX",
              "ServicePro",
              "ManufactureCo",
              "ITSolutions",
              "EnterprisePlus",
              "GlobalTech",
              "InnovateNow",
              "ProServices",
              "TechLeaders",
              "IndustryPro",
            ].map((company, idx) => (
              <div
                key={company}
                className={`flex items-center justify-center text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors animate-fade-in-scale stagger-${idx + 1}`}
              >
                {company}
              </div>
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
                Ready to Join Them?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Start your free trial today and see the results for yourself
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/login">
                  <Button variant="secondary" size="xl">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                  Schedule Demo
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
