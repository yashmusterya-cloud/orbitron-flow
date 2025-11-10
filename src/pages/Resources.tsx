import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  FileText,
  Video,
  BookOpen,
  Download,
  Search,
  Calendar,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function Resources() {
  const featured = [
    {
      type: "Whitepaper",
      title: "AI Agent Orchestration in RFP Automation: Complete Guide",
      description: "Comprehensive analysis of multi-agent AI systems and their impact on RFP processes",
      icon: FileText,
      downloads: "2.4k",
      category: "Technical",
    },
    {
      type: "Webinar",
      title: "Live AI Agent Demo: Watch 4 Agents Work Together",
      description: "60-minute deep dive into real-world RFP automation with Q&A",
      icon: Video,
      downloads: "1.8k",
      category: "Demo",
    },
    {
      type: "ROI Calculator",
      title: "Calculate Your RFP Automation ROI",
      description: "Interactive tool to estimate time and cost savings",
      icon: TrendingUp,
      downloads: "3.2k",
      category: "Tool",
    },
  ];

  const whitepapers = [
    {
      title: "The Future of Enterprise RFP Management",
      description: "Industry trends and predictions for AI-powered RFP automation",
      downloads: "1.5k",
      date: "Mar 2025",
    },
    {
      title: "Security & Compliance in AI RFP Systems",
      description: "Enterprise security considerations for AI agent deployment",
      downloads: "1.2k",
      date: "Feb 2025",
    },
    {
      title: "ROI Analysis: Traditional vs AI-Powered RFP",
      description: "Data-driven comparison of RFP methodologies",
      downloads: "2.1k",
      date: "Jan 2025",
    },
  ];

  const webinars = [
    {
      title: "Getting Started with Multi-Agent AI",
      description: "Introduction to RFP AI platform for new users",
      date: "Apr 15, 2025",
      duration: "45 min",
    },
    {
      title: "Advanced Orchestration Techniques",
      description: "Optimizing AI agent workflows for complex RFPs",
      date: "Apr 22, 2025",
      duration: "60 min",
    },
    {
      title: "Industry Best Practices: Manufacturing",
      description: "Sector-specific strategies and success stories",
      date: "Apr 29, 2025",
      duration: "50 min",
    },
  ];

  const templates = [
    "Enterprise RFP Response Template",
    "Security Questionnaire Checklist",
    "DDQ Standard Responses",
    "Technical Specification Matrix",
    "Pricing Proposal Template",
    "Case Study Format",
  ];

  const blogPosts = [
    {
      title: "5 Ways AI Agents Transform RFP Processes",
      excerpt: "Discover how specialized AI agents tackle different aspects of RFP management",
      date: "Mar 28, 2025",
      readTime: "8 min",
    },
    {
      title: "Customer Spotlight: ManufactureCo's 15x Improvement",
      excerpt: "How one company went from 3 weeks to 2 days per RFP",
      date: "Mar 21, 2025",
      readTime: "6 min",
    },
    {
      title: "Understanding AI Agent Confidence Scores",
      excerpt: "Technical deep-dive into how we ensure 95%+ accuracy",
      date: "Mar 14, 2025",
      readTime: "10 min",
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
              Resource Center
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Learn About <span className="animated-gradient-text">AI-Powered</span> RFP Automation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to understand, implement, and master multi-agent AI for RFPs
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search whitepapers, webinars, guides..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Resources</h2>
            <p className="text-xl text-muted-foreground">
              Most popular content from the RFP AI knowledge base
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((resource, idx) => (
              <Card
                key={resource.title}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline">{resource.category}</Badge>
                    <h3 className="text-2xl font-bold leading-tight">{resource.title}</h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      <Download className="w-4 h-4 inline mr-1" />
                      {resource.downloads} downloads
                    </span>
                    <Button variant="ghost" className="group">
                      Access
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Whitepapers & Reports</h2>
              <p className="text-xl text-muted-foreground">
                In-depth analysis and industry insights
              </p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((paper, idx) => (
              <Card
                key={paper.title}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6 space-y-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">{paper.title}</h3>
                  <p className="text-sm text-muted-foreground">{paper.description}</p>
                  <div className="flex items-center justify-between pt-4 text-sm">
                    <span className="text-muted-foreground">{paper.date}</span>
                    <span className="text-muted-foreground">{paper.downloads} downloads</span>
                  </div>
                  <Button variant="hero" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Upcoming Webinars</h2>
              <p className="text-xl text-muted-foreground">
                Live sessions with product experts
              </p>
            </div>
            <Button variant="outline">View Schedule</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((webinar, idx) => (
              <Card
                key={webinar.title}
                className={`hover-lift border-2 hover:border-accent/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    <Calendar className="w-3 h-3 mr-1" />
                    {webinar.date}
                  </Badge>
                  <h3 className="text-xl font-bold">{webinar.title}</h3>
                  <p className="text-sm text-muted-foreground">{webinar.description}</p>
                  <div className="text-sm text-muted-foreground">{webinar.duration}</div>
                  <Button variant="hero" size="sm" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Templates & Tools</h2>
            <p className="text-xl text-muted-foreground">
              Ready-to-use templates for common RFP scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {templates.map((template, idx) => (
              <Card
                key={template}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <span className="font-medium">{template}</span>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Latest from Our Blog</h2>
              <p className="text-xl text-muted-foreground">
                Tips, updates, and industry insights
              </p>
            </div>
            <Button variant="outline">View All Posts</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Card
                key={post.title}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6 space-y-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto group">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
                Ready to Experience It Yourself?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Stop reading about AI agents—start using them
              </p>
              <Link to="/login">
                <Button variant="secondary" size="xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
