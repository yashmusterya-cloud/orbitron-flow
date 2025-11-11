import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AIOrbit } from "@/components/AIOrbit";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProgressStepper } from "@/components/ProgressStepper";
import { AgentStatus } from "@/components/AgentStatus";
import { ProcessingProgress } from "@/components/ProcessingProgress";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Search,
  FileText,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Download,
  Cpu,
  GitBranch,
  Sparkles,
  Play,
  Loader2,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rfpLoaded, setRfpLoaded] = useState(false);
  const [specMatchRun, setSpecMatchRun] = useState(false);
  const [skuSelected, setSkuSelected] = useState(false);
  const [pricingCalculated, setPricingCalculated] = useState(false);
  const [rfpUrls, setRfpUrls] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rfpList, setRfpList] = useState<Array<{
    id: string;
    title: string;
    dueDate: string;
    status: "new" | "urgent" | "processing" | "completed";
  }>>([]);

  const agentWorkflow = [
    {
      agent: "Main Agent",
      description: "Orchestrates the entire workflow and coordinates all agents",
      inputs: "RFP request",
      outputs: "Workflow plan, agent delegation",
      icon: GitBranch,
      color: "from-agent-orchestrator to-agent-orchestrator",
    },
    {
      agent: "Sales Agent",
      description: "Monitors tender portals and detects new RFPs",
      inputs: "RFP URLs, tender portals",
      outputs: "RFP requirements extracted",
      icon: Search,
      color: "from-agent-sales to-secondary",
    },
    {
      agent: "Technical Agent",
      description: "Matches RFP specs with product SKUs, calculates match %",
      inputs: "RFP specs, product database",
      outputs: "Best SKU matches with scores",
      icon: Cpu,
      color: "from-agent-technical to-primary",
    },
    {
      agent: "Pricing Agent",
      description: "Calculates pricing for SKUs and test costs",
      inputs: "Selected SKUs, test requirements",
      outputs: "Complete cost breakdown",
      icon: DollarSign,
      color: "from-agent-pricing to-status-complete",
    },
    {
      agent: "Main Agent",
      description: "Validates outputs and generates final RFP response",
      inputs: "All agent outputs",
      outputs: "Professional RFP response document",
      icon: FileText,
      color: "from-agent-orchestrator to-agent-orchestrator",
    },
  ];

  const sampleRFP = {
    item: "1100V, 3C 95 sqmm Aluminium Cable",
    quantity: "1200 meters",
    insulation: "XLPE",
    armouring: "Aluminium",
    standard: "IS 7098 Part-II",
    tests: ["Tensile test", "Insulation resistance test", "High voltage test"],
  };

  const oemProducts = [
    {
      sku: "AP-XLPE-95A",
      armouring: "Aluminium",
      insulation: "XLPE",
      voltage: "1100V",
      size: "95 sqmm",
      standard: "IS 7098-II",
    },
    {
      sku: "AP-XLPE-95C",
      armouring: "Copper",
      insulation: "XLPE",
      voltage: "1100V",
      size: "95 sqmm",
      standard: "IS 7098-II",
    },
    {
      sku: "AP-PVC-95A",
      armouring: "Aluminium",
      insulation: "PVC",
      voltage: "1100V",
      size: "95 sqmm",
      standard: "IS 7098-II",
    },
  ];

  const specMatchResults = [
    { sku: "AP-XLPE-95A", match: 100, reason: "All RFP specs matched" },
    { sku: "AP-XLPE-95C", match: 80, reason: "Armouring different" },
    { sku: "AP-PVC-95A", match: 60, reason: "Insulation different" },
  ];

  const pricingBreakdown = {
    pricePerMeter: 420,
    quantity: 1200,
    materialCost: 504000,
    tests: [
      { name: "Tensile test", cost: 3000 },
      { name: "Insulation resistance test", cost: 2500 },
      { name: "High voltage test", cost: 4000 },
    ],
    testCosts: 9500,
    grandTotal: 513500,
  };

  const handleLoadRFP = () => {
    setRfpLoaded(true);
    setSpecMatchRun(false);
    setSkuSelected(false);
    setPricingCalculated(false);
    
    toast({
      title: "RFP Loaded Successfully",
      description: "Sample RFP data has been loaded for demo purposes.",
    });
  };

  const handleRunSpecMatch = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setSpecMatchRun(true);
      setIsProcessing(false);
      
      toast({
        title: "Spec Match Complete",
        description: "AI agent analyzed 3 products and found perfect match.",
      });
      
      setTimeout(() => {
        setSkuSelected(true);
        setPricingCalculated(true);
        
        toast({
          title: "SKU Selected & Priced",
          description: "AP-XLPE-95A selected with 100% match. Pricing calculated.",
        });
      }, 1000);
    }, 2500);
  };

  const handleScanRFPs = () => {
    setIsScanning(true);
    setTimeout(() => {
      setRfpList([
        { id: "1", title: "HV Cable Supply - Metro Rail", dueDate: "Aug 30, 2024", status: "urgent" },
        { id: "2", title: "Electrical Wires - Govt Project", dueDate: "Sep 15, 2024", status: "new" },
        { id: "3", title: "Power Cables - Industrial", dueDate: "Aug 25, 2024", status: "urgent" },
      ]);
      setIsScanning(false);
      
      toast({
        title: "RFPs Scanned Successfully",
        description: "Found 3 RFPs ready for processing.",
      });
    }, 2500);
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      new: "bg-agent-technical text-white",
      urgent: "bg-status-error text-white",
      processing: "bg-status-warning text-white",
      completed: "bg-status-complete text-white",
    };
    return styles[status as keyof typeof styles] || styles.new;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProgressStepper />
      <AgentStatus />
      
      {/* Loading Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card p-8 rounded-lg shadow-xl border-2 border-primary/50 max-w-md w-full mx-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">Technical Agent Processing</h3>
              <ProcessingProgress 
                stages={[
                  { label: "Loading product database...", duration: 800 },
                  { label: "Analyzing specifications...", duration: 800 },
                  { label: "Calculating match percentages...", duration: 900 },
                ]}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="animated-gradient-text">OrbitronFlow</span>
                <br />
                <span className="text-foreground">AI-Powered RFP Automation System</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                End-to-end automation for B2B RFP qualification, SKU matching & pricing. 
                Watch the Main Agent orchestrate specialized AI agents working together in real-time.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  See How It Works
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="group"
                  onClick={() => navigate("/live-demo")}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Try Live Demo
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center animate-fade-in-scale stagger-2">
              <AIOrbit size="lg" className="animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* RFP Scanning Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <Badge className="bg-agent-sales/10 text-agent-sales border-agent-sales/20 mb-4">
                Sales Agent
              </Badge>
              <h2 className="text-4xl font-bold mb-4">RFP Scanner</h2>
              <p className="text-xl text-muted-foreground">
                Monitor tender portals and extract RFP requirements automatically
              </p>
            </div>

            {/* URL Input Section */}
            <Card className="mb-8 animate-fade-in-up stagger-1">
              <CardHeader>
                <CardTitle>Enter RFP Source URLs</CardTitle>
                <CardDescription>
                  Paste one or multiple URLs from tender portals or RFP documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-agent-sales mt-0.5" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium">How Sales Agent Works:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Continuously monitors multiple tender portals</li>
                          <li>• Extracts RFP requirements automatically</li>
                          <li>• Validates URL format and accessibility</li>
                          <li>• Alerts team about urgent deadlines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Textarea
                    placeholder="https://tenderwizard.com/rfp/cable-supply&#10;https://eprocure.gov.in/rfp/electrical-2024&#10;https://gem.gov.in/tender/power-cables"
                    rows={4}
                    value={rfpUrls}
                    onChange={(e) => setRfpUrls(e.target.value)}
                    className="resize-none"
                  />
                  {rfpUrls.trim() && (
                    <div className="flex items-center gap-2 text-sm text-status-complete">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>✓ URL format accepted - {rfpUrls.split('\n').filter(u => u.trim()).length} URLs detected</span>
                    </div>
                  )}
                  <Button
                    onClick={handleScanRFPs}
                    disabled={isScanning || !rfpUrls.trim()}
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    {isScanning ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Scanning RFPs...
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Scan RFPs
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* RFP List Table */}
            {rfpList.length > 0 && (
              <Card className="animate-fade-in-up stagger-2">
                <CardHeader>
                  <CardTitle>Detected RFPs</CardTitle>
                  <CardDescription>
                    {rfpList.length} RFP{rfpList.length !== 1 ? "s" : ""} found and analyzed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>RFP Title</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rfpList.map((rfp) => (
                          <TableRow key={rfp.id}>
                            <TableCell className="font-medium">{rfp.title}</TableCell>
                            <TableCell>{rfp.dueDate}</TableCell>
                            <TableCell>
                              <Badge className={getStatusBadge(rfp.status)}>
                                {rfp.status.charAt(0).toUpperCase() + rfp.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                size="sm"
                                onClick={() => navigate("/technical-agent")}
                              >
                                Respond
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {rfpList.map((rfp) => (
                      <div key={rfp.id} className="border rounded-lg p-4 space-y-3 bg-card">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-base flex-1">{rfp.title}</h3>
                          <Badge className={getStatusBadge(rfp.status)}>
                            {rfp.status.charAt(0).toUpperCase() + rfp.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Due: {rfp.dueDate}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => navigate("/technical-agent")}
                          className="w-full"
                        >
                          Respond
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Agentic AI Workflow
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              How The Agentic AI System Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Main Agent orchestrates specialized AI agents to automate your entire RFP process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {agentWorkflow.slice(0, 4).map((workflow, idx) => (
              <div key={idx} className="relative group">
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up cursor-pointer min-h-[320px] flex flex-col">
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${workflow.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto shadow-lg`}>
                      <workflow.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Agent Info */}
                    <div className="text-center space-y-3 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg">{workflow.agent}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{workflow.description}</p>
                      
                      <div className="space-y-2 text-xs">
                        <div className="p-2 bg-muted/50 rounded">
                          <span className="font-semibold">Input: </span>
                          <span className="text-muted-foreground">{workflow.inputs}</span>
                        </div>
                        <div className="p-2 bg-muted/50 rounded">
                          <span className="font-semibold">Output: </span>
                          <span className="text-muted-foreground">{workflow.outputs}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow between cards */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary drop-shadow-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo RFP Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Live Demo: RFP Processing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how OrbitronFlow processes a real RFP from start to finish
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleLoadRFP}
                className="group"
              >
                <FileText className="w-5 h-5 mr-2" />
                Load Sample RFP
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {rfpLoaded && (
              <Card className="border-2 border-primary/50 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Sample RFP - Cable Procurement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Item Description</p>
                      <p className="font-semibold">{sampleRFP.item}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Quantity</p>
                      <p className="font-semibold">{sampleRFP.quantity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Insulation Type</p>
                      <p className="font-semibold">{sampleRFP.insulation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Armouring Type</p>
                      <p className="font-semibold">{sampleRFP.armouring}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Standard Compliance</p>
                      <p className="font-semibold">{sampleRFP.standard}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tests Required</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {sampleRFP.tests.map((test, idx) => (
                          <Badge key={idx} variant="outline">{test}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* OEM Product Dataset Section */}
      {rfpLoaded && (
        <section id="sku-match" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <Badge className="bg-agent-technical/10 text-agent-technical border-agent-technical/20">
                Product Database
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold">OEM Product Database</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our system matches RFP requirements against our comprehensive product catalog
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              <Card className="animate-fade-in-up">
                <CardContent className="p-6">
                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>SKU</TableHead>
                          <TableHead>Armouring</TableHead>
                          <TableHead>Insulation</TableHead>
                          <TableHead>Voltage</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Standard</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {oemProducts.map((product) => (
                          <TableRow key={product.sku}>
                            <TableCell className="font-semibold">{product.sku}</TableCell>
                            <TableCell>{product.armouring}</TableCell>
                            <TableCell>{product.insulation}</TableCell>
                            <TableCell>{product.voltage}</TableCell>
                            <TableCell>{product.size}</TableCell>
                            <TableCell>{product.standard}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {oemProducts.map((product) => (
                      <div key={product.sku} className="border rounded-lg p-4 space-y-3 bg-card">
                        <h3 className="font-bold text-lg text-primary">{product.sku}</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Armouring</p>
                            <p className="font-medium">{product.armouring}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Insulation</p>
                            <p className="font-medium">{product.insulation}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Voltage</p>
                            <p className="font-medium">{product.voltage}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Size</p>
                            <p className="font-medium">{product.size}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">Standard</p>
                            <p className="font-medium">{product.standard}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={handleRunSpecMatch}
                  disabled={isProcessing || specMatchRun}
                  className="group"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Agent Analyzing...
                    </>
                  ) : (
                    <>
                      <Cpu className="w-5 h-5 mr-2" />
                      Run Spec Match Analysis
                      <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              {specMatchRun && (
                <Card className="border-2 border-agent-technical/50 animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="w-6 h-6 text-agent-technical" />
                      Spec Match Comparison Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>SKU</TableHead>
                            <TableHead>Match %</TableHead>
                            <TableHead>Reason</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {specMatchResults.map((result) => (
                            <TableRow key={result.sku}>
                              <TableCell className="font-semibold">{result.sku}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-full max-w-[200px] bg-muted rounded-full h-2">
                                    <div 
                                      className={`h-full rounded-full ${
                                        result.match === 100 ? 'bg-status-complete' : 
                                        result.match >= 80 ? 'bg-status-active' : 
                                        'bg-status-warning'
                                      }`}
                                      style={{ width: `${result.match}%` }}
                                    />
                                  </div>
                                  <span className="font-bold">{result.match}%</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-muted-foreground">{result.reason}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                      {specMatchResults.map((result) => (
                        <div key={result.sku} className="border rounded-lg p-4 space-y-3 bg-card">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">{result.sku}</h3>
                            <span className={`font-bold text-lg ${
                              result.match === 100 ? 'text-status-complete' : 
                              result.match >= 80 ? 'text-status-active' : 
                              'text-status-warning'
                            }`}>{result.match}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`h-full rounded-full ${
                                result.match === 100 ? 'bg-status-complete' : 
                                result.match >= 80 ? 'bg-status-active' : 
                                'bg-status-warning'
                              }`}
                              style={{ width: `${result.match}%` }}
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">{result.reason}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Selected SKU Section */}
      {skuSelected && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-status-complete/50 bg-status-complete/5 animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-status-complete" />
                      Final Selected SKU
                    </CardTitle>
                    <Badge className="bg-status-complete text-white">Selected</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">SKU Code</p>
                      <p className="text-2xl font-bold text-status-complete">AP-XLPE-95A</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Match Percentage</p>
                      <p className="text-2xl font-bold text-status-complete">100%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Why Selected</p>
                    <p className="text-lg font-semibold">All RFP specifications matched perfectly</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Voltage: 1100V
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Insulation: XLPE
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Armouring: Aluminium
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Size: 95 sqmm
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Standard: IS 7098-II
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {pricingCalculated && (
        <section id="pricing" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <Badge className="bg-agent-pricing/10 text-agent-pricing border-agent-pricing/20">
                Pricing Agent
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold">Pricing Calculation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Automated pricing with material costs and testing requirements
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-agent-pricing/50 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-agent-pricing" />
                    Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="text-sm text-muted-foreground">Product Price</p>
                        <p className="font-semibold">₹{pricingBreakdown.pricePerMeter} per meter</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="text-sm text-muted-foreground">Material Cost</p>
                        <p className="font-semibold">{pricingBreakdown.quantity} meters × ₹{pricingBreakdown.pricePerMeter}</p>
                      </div>
                      <p className="text-xl font-bold">₹{pricingBreakdown.materialCost.toLocaleString()}</p>
                    </div>

                    <div className="space-y-3 pb-4 border-b">
                      <p className="text-sm text-muted-foreground">Test Costs</p>
                      {pricingBreakdown.tests.map((test) => (
                        <div key={test.name} className="flex justify-between items-center ml-4">
                          <p className="font-medium">{test.name}</p>
                          <p className="font-semibold">₹{test.cost.toLocaleString()}</p>
                        </div>
                      ))}
                      <div className="flex justify-between items-center ml-4 pt-2">
                        <p className="font-semibold">Total Test Costs</p>
                        <p className="font-bold">₹{pricingBreakdown.testCosts.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <p className="text-xl font-bold">Grand Total</p>
                      <p className="text-3xl font-bold text-agent-pricing">
                        ₹{pricingBreakdown.grandTotal.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Final Output Section */}
      {pricingCalculated && (
        <section id="final-output" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <Badge className="bg-agent-orchestrator/10 text-agent-orchestrator border-agent-orchestrator/20">
                Final RFP Response
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold">Generated RFP Response</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete, professional RFP response ready for submission
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              <Card className="border-2 border-agent-orchestrator/50 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-agent-orchestrator" />
                    Consolidated RFP Response Document
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="p-6 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Search className="w-5 h-5 text-agent-sales" />
                        <h3 className="font-bold">Sales Agent Summary</h3>
                      </div>
                      <p className="text-muted-foreground">
                        RFP detected and qualified for cable procurement. Specifications verified against requirements: 
                        1100V, 3C 95 sqmm Aluminium Cable with XLPE insulation, IS 7098 Part-II compliant.
                      </p>
                    </div>

                    <div className="p-6 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Cpu className="w-5 h-5 text-agent-technical" />
                        <h3 className="font-bold">Technical Agent Match Result</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        SKU <strong className="text-foreground">AP-XLPE-95A</strong> selected with <strong className="text-status-complete">100% specification match</strong>.
                        All parameters including voltage, insulation type, armouring, size, and standard compliance verified.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-status-complete/10 text-status-complete border-status-complete/20">
                          Voltage Match: 100%
                        </Badge>
                        <Badge className="bg-status-complete/10 text-status-complete border-status-complete/20">
                          Material Match: 100%
                        </Badge>
                        <Badge className="bg-status-complete/10 text-status-complete border-status-complete/20">
                          Standard Match: 100%
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="w-5 h-5 text-agent-pricing" />
                        <h3 className="font-bold">Pricing Agent Cost Breakdown</h3>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p>• Material Cost: ₹{pricingBreakdown.materialCost.toLocaleString()} ({pricingBreakdown.quantity} meters @ ₹{pricingBreakdown.pricePerMeter}/meter)</p>
                        <p>• Testing Costs: ₹{pricingBreakdown.testCosts.toLocaleString()} (Tensile, IR, HV tests)</p>
                        <p className="text-lg font-bold text-foreground pt-2">
                          Total Quote: ₹{pricingBreakdown.grandTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <Button variant="hero" size="xl" className="group">
                      <Download className="w-5 h-5 mr-2" />
                      Download Final RFP Response (PDF)
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary via-accent to-agent-orchestrator border-0">
                <CardContent className="p-12 text-center space-y-6 text-white">
                  <CheckCircle2 className="w-16 h-16 mx-auto" />
                  <h3 className="text-3xl font-bold">RFP Response Complete!</h3>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    OrbitronFlow has successfully processed your RFP from detection to final response generation 
                    in seconds. The complete multi-agent workflow delivered accurate SKU matching, competitive pricing, 
                    and a professional submission-ready document.
                  </p>
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div>
                      <div className="text-4xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Spec Match</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">5</div>
                      <div className="text-sm opacity-80">AI Agents</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">&lt;1min</div>
                      <div className="text-sm opacity-80">Process Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Simple & Transparent
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pricing Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your RFP automation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>For small teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹9,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>50 RFPs per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>AI-powered SKU matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Basic pricing calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹24,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>200 RFPs per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Advanced AI orchestration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Complete pricing breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button variant="hero" className="w-full mt-6">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Unlimited RFPs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Full agent orchestration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Custom AI model training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-status-complete" />
                    <span>SLA & 24/7 support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
