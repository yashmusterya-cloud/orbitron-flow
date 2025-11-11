import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Shield,
  DollarSign,
  Rocket,
  Search,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "platform",
      title: "Platform & Features",
      icon: Sparkles,
      color: "text-agent-orchestrator",
      questions: [
        {
          q: "What is RFP AI and how does it work?",
          a: "RFP AI is the first visual AI agent platform for RFP automation. It uses multiple specialized AI agents that work together to handle your entire RFP workflow—from discovery to final response. The Main Orchestrator coordinates three specialized agents (Technical, Pricing, and Sales) to deliver accurate, comprehensive RFP responses in hours instead of weeks.",
        },
        {
          q: "What are AI agents and how do they differ from regular AI?",
          a: "AI agents are specialized, autonomous systems designed for specific tasks. Unlike general AI that responds to prompts, our agents actively coordinate, make decisions, and execute workflows independently. Each agent has expertise in its domain (technical specs, pricing, sales) and works collaboratively with other agents to optimize your RFP process.",
        },
        {
          q: "Can I integrate RFP AI with my existing tools?",
          a: "Yes! RFP AI integrates with popular CRM systems, document management platforms, and collaboration tools. We offer API access on Professional and Enterprise plans, plus custom integrations for Enterprise customers. Our team can help configure integrations during onboarding.",
        },
        {
          q: "How accurate is the technical matching?",
          a: "Our Technical Agent achieves 95%+ accuracy in product specification matching. It uses advanced natural language processing and machine learning to understand requirements and match them against your product catalog with confidence scoring for each match.",
        },
        {
          q: "What file formats does RFP AI support?",
          a: "RFP AI supports all common RFP formats including Word (.doc, .docx), PDF, Excel (.xls, .xlsx), and plain text. The platform automatically extracts requirements, questions, and structure from these documents regardless of format.",
        },
      ],
    },
    {
      id: "implementation",
      title: "Implementation & Onboarding",
      icon: Rocket,
      color: "text-agent-technical",
      questions: [
        {
          q: "How long does implementation take?",
          a: "Implementation varies by plan: Starter customers are typically live within 2-3 days with minimal setup. Professional customers complete onboarding in 1-2 weeks including content library setup and team training. Enterprise customers receive white-glove onboarding over 2-4 weeks with custom AI agent training and integration configuration.",
        },
        {
          q: "Do I need technical expertise to use RFP AI?",
          a: "No technical expertise required! RFP AI is designed for sales and proposal teams. The visual interface makes it easy to monitor AI agents, review responses, and collaborate with your team. Our training program ensures your team is confident using the platform from day one.",
        },
        {
          q: "What training and support do you provide?",
          a: "All customers receive comprehensive onboarding training including live sessions, video tutorials, and documentation. Professional customers get priority 24/7 support via email and dedicated Slack channel. Enterprise customers receive a dedicated account manager, custom training sessions, and phone support.",
        },
        {
          q: "Can I customize the AI agents for my business?",
          a: "Yes! Professional customers can configure agent workflows and response templates. Enterprise customers receive custom AI agent training on your specific products, services, and messaging to ensure responses align perfectly with your brand and offerings.",
        },
        {
          q: "How do you handle our proprietary information?",
          a: "Your content library is completely secure and private. All information is encrypted at rest and in transit. AI agents only access your approved content library—they never share information between customers. Enterprise customers can choose on-premise deployment for maximum control.",
        },
      ],
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: Shield,
      color: "text-status-complete",
      questions: [
        {
          q: "Is RFP AI SOC 2 compliant?",
          a: "Yes! RFP AI is SOC 2 Type II certified. We undergo regular independent security audits covering availability, processing integrity, confidentiality, and privacy. Detailed compliance reports are available for Enterprise customers.",
        },
        {
          q: "How is my data encrypted?",
          a: "All data is encrypted end-to-end using AES-256 encryption at rest and TLS 1.3 in transit. We implement automatic key rotation every 90 days and maintain encrypted backups with point-in-time recovery.",
        },
        {
          q: "Are you GDPR and HIPAA compliant?",
          a: "Yes, we're fully GDPR compliant with data residency options in multiple regions. Our infrastructure is HIPAA-ready for healthcare customers who require additional compliance. We can provide Business Associate Agreements (BAAs) for healthcare organizations.",
        },
        {
          q: "What access controls are available?",
          a: "RFP AI offers role-based access control (RBAC) with granular permissions, multi-factor authentication (MFA), and session management. Enterprise customers get SSO integration, advanced audit logging, and custom security policies.",
        },
        {
          q: "Where is my data stored?",
          a: "Data is stored in secure, redundant data centers in your chosen region (US, EU, or Asia-Pacific). Enterprise customers can select specific geographic regions for data residency compliance or opt for on-premise deployment.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing & Plans",
      icon: DollarSign,
      color: "text-agent-pricing",
      questions: [
        {
          q: "Do you offer a free trial?",
          a: "Yes! We offer a 14-day free trial with full access to the Professional plan including all 4 AI agents, unlimited RFPs, and advanced analytics. No credit card required to start—just sign up and explore the platform.",
        },
        {
          q: "How does per-user pricing work?",
          a: "Each active user who accesses the platform requires a license. You can add or remove users anytime, and we prorate charges monthly. Team collaboration features allow unlimited viewers, but editors and administrators count toward your license total.",
        },
        {
          q: "What's included in the Starter plan?",
          a: "Starter plan ($89/user/month) includes 1 AI Agent (Main Orchestrator), up to 20 RFPs per month, basic content library, email support, standard response templates, and basic analytics. Ideal for small teams getting started with AI automation.",
        },
        {
          q: "What's the difference between Professional and Enterprise?",
          a: "Professional ($159/user/month) includes all 4 AI agents, unlimited RFPs, advanced features, and priority support. Enterprise (custom pricing) adds dedicated account manager, custom AI training, on-premise options, SSO, custom SLA, white-glove onboarding, and unlimited users. Contact sales for Enterprise details.",
        },
        {
          q: "Do you offer annual discounts?",
          a: "Yes! Annual plans receive 20% discount compared to monthly billing. Enterprise customers can negotiate custom terms for multi-year agreements. Contact our sales team to discuss volume discounts and special pricing for large deployments.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, Amex) for monthly subscriptions. Enterprise customers can pay via ACH transfer, wire transfer, or purchase order. We offer flexible billing terms for annual and multi-year contracts.",
        },
        {
          q: "Can I upgrade or downgrade my plan?",
          a: "Absolutely! You can upgrade anytime and changes take effect immediately. Downgrades take effect at the start of your next billing cycle. If you downgrade, you'll retain access to current plan features until the billing period ends.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (item) =>
        searchQuery === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              How Can We <span className="animated-gradient-text">Help</span> You?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our AI agent platform, implementation, security, and pricing
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredCategories.length === 0 ? (
              <Card className="border-2">
                <CardContent className="p-12 text-center">
                  <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-xl text-muted-foreground">
                    No results found for "{searchQuery}". Try a different search term or browse all questions below.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredCategories.map((category, idx) => (
                <div
                  key={category.id}
                  className={`animate-fade-in-up stagger-${idx + 1}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>

                  <Card className="border-2">
                    <CardContent className="p-8">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((item, qIdx) => (
                          <AccordionItem key={qIdx} value={`${category.id}-${qIdx}`}>
                            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                              {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {item.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-2 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <MessageCircle className="w-16 h-16 mx-auto text-primary" />
              <h2 className="text-3xl font-bold">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our team is here to help! Get in touch and we'll answer any questions about RFP AI, implementation, or custom enterprise solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Our Team
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg">
                    Start Free Trial
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
