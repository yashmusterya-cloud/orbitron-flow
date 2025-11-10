import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  Users,
  AlertCircle,
  CheckCircle2,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Security() {
  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "End-to-end encryption at rest and in transit using AES-256",
      icon: Lock,
      details: [
        "TLS 1.3 for data in transit",
        "AES-256 encryption at rest",
        "Encrypted backups",
        "Key rotation every 90 days",
      ],
    },
    {
      title: "Access Control",
      description: "Role-based access control with granular permissions",
      icon: Users,
      details: [
        "Role-based permissions",
        "Multi-factor authentication",
        "SSO integration (Enterprise)",
        "Session management",
      ],
    },
    {
      title: "Audit & Compliance",
      description: "Complete audit trails and compliance reporting",
      icon: FileCheck,
      details: [
        "Detailed audit logs",
        "Compliance reporting",
        "Activity monitoring",
        "Automated alerts",
      ],
    },
    {
      title: "Data Residency",
      description: "Choose where your data is stored and processed",
      icon: Server,
      details: [
        "Multiple regions available",
        "On-premise option (Enterprise)",
        "Data sovereignty compliance",
        "Backup redundancy",
      ],
    },
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Independent security audit covering availability, processing integrity, confidentiality, and privacy",
      status: "Certified",
      icon: Shield,
    },
    {
      name: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations",
      status: "Compliant",
      icon: Shield,
    },
    {
      name: "HIPAA Ready",
      description: "HIPAA-compliant infrastructure for healthcare customers",
      status: "Ready",
      icon: Shield,
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      status: "Certified",
      icon: Shield,
    },
  ];

  const securityPractices = [
    "Regular penetration testing by third-party security firms",
    "24/7 security monitoring and incident response",
    "Secure development lifecycle with code review",
    "Employee security training and background checks",
    "Disaster recovery and business continuity planning",
    "Regular security updates and patch management",
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
              Enterprise Security
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Security & <span className="animated-gradient-text">Trust</span> First
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise-grade security and compliance built into every layer of RFP AI. Your data
              is protected by industry-leading security practices and certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Security Architecture
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Multi-Layered Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Defense in depth approach with security at every layer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, idx) => (
              <Card
                key={feature.title}
                className={`hover-lift border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    {feature.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Compliance & Certifications
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Industry-Standard Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Independently audited and certified for enterprise security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <Card
                key={cert.name}
                className={`hover-scale border-2 hover:border-primary/50 transition-all animate-fade-in-up stagger-${idx + 1}`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                    <Badge className="bg-status-complete/10 text-status-complete border-status-complete/20">
                      {cert.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download Compliance Reports
            </Button>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Security Practices
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Comprehensive Security Program
              </h2>
              <p className="text-xl text-muted-foreground">
                Continuous monitoring and improvement of our security posture
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {securityPractices.map((practice, idx) => (
                    <div
                      key={practice}
                      className={`flex items-start gap-3 animate-fade-in-up stagger-${idx + 1}`}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise SLA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-12 space-y-8">
                <div className="text-center">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    Enterprise SLA
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">99.9% Uptime Guarantee</h2>
                  <p className="text-xl text-muted-foreground">
                    Enterprise customers receive guaranteed uptime with financial credits for any
                    downtime
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">&lt;1h</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary via-accent to-agent-orchestrator border-0">
            <CardContent className="p-16 text-center space-y-8 text-white">
              <Shield className="w-20 h-20 mx-auto opacity-90" />
              <h2 className="text-4xl lg:text-5xl font-bold">
                Questions About Security?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Our security team is here to answer any questions about our practices and
                compliance
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="xl">
                  Contact Security Team
                </Button>
                <Link to="/pricing">
                  <Button variant="outline" size="xl" className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                    View Enterprise Plans
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
