import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProgressStepper } from "@/components/ProgressStepper";
import { AgentStatus } from "@/components/AgentStatus";
import { ProcessingProgress } from "@/components/ProcessingProgress";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Cpu,
  DollarSign,
  CheckCircle2,
  Play,
  Loader2,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LiveDemo() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const sampleRFP = {
    item: "1100V, 3C 95 sqmm Aluminium Cable",
    quantity: "1200 meters",
    insulation: "XLPE",
    armouring: "Aluminium",
    voltage: "1100V",
    size: "95 sqmm",
    standard: "IS 7098 Part-II",
    tests: ["Tensile test", "Insulation resistance test", "High voltage test"],
  };

  const skuMatches = [
    { 
      sku: "AP-XLPE-95A", 
      match: 100, 
      armouring: "Aluminium",
      insulation: "XLPE",
      voltage: "1100V",
      size: "95 sqmm",
      standard: "IS 7098-II",
      reason: "Perfect match - All specifications aligned" 
    },
    { 
      sku: "AP-XLPE-95C", 
      match: 87, 
      armouring: "Copper",
      insulation: "XLPE",
      voltage: "1100V",
      size: "95 sqmm",
      standard: "IS 7098-II",
      reason: "Armouring type differs from requirement" 
    },
    { 
      sku: "AP-PVC-95A", 
      match: 78, 
      armouring: "Aluminium",
      insulation: "PVC",
      voltage: "1100V",
      size: "95 sqmm",
      standard: "IS 7098-II",
      reason: "Insulation type differs from requirement" 
    },
  ];

  const pricingData = {
    sku: "AP-XLPE-95A",
    pricePerMeter: 420,
    quantity: 1200,
    materialCost: 504000,
    tests: [
      { name: "Tensile test", cost: 3000 },
      { name: "Insulation resistance test", cost: 2500 },
      { name: "High voltage test", cost: 4000 },
    ],
    totalTestCost: 9500,
    grandTotal: 513500,
  };

  const handleLoadRFP = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCurrentStep(1);
      setIsProcessing(false);
      toast({
        title: "RFP Loaded Successfully",
        description: "Sample RFP specifications extracted and parsed.",
      });
    }, 1500);
  };

  const handleExtractRequirements = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCurrentStep(2);
      setIsProcessing(false);
      toast({
        title: "Requirements Extracted",
        description: "All RFP specifications identified and structured.",
      });
    }, 1800);
  };

  const handleTechnicalMatching = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCurrentStep(3);
      setIsProcessing(false);
      toast({
        title: "Technical Matching Complete",
        description: "Found 3 product matches with detailed analysis.",
      });
    }, 2500);
  };

  const handlePricingCalculation = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCurrentStep(4);
      setIsProcessing(false);
      toast({
        title: "Pricing Calculated",
        description: "Complete cost breakdown generated.",
      });
    }, 2000);
  };

  const handleGenerateResponse = () => {
    toast({
      title: "Navigating to Final Response",
      description: "Compiling complete RFP response document.",
    });
    navigate("/final-response");
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
              <h3 className="text-xl font-semibold text-center">AI Agent Processing</h3>
              <ProcessingProgress 
                stages={[
                  { label: "Analyzing request...", duration: 600 },
                  { label: "Processing data...", duration: 700 },
                  { label: "Finalizing results...", duration: 700 },
                ]}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Interactive Demo
            </Badge>
            <h1 className="text-5xl font-bold">Live RFP Processing Demo</h1>
            <p className="text-xl text-muted-foreground">
              Watch the Main Agent orchestrate specialized AI agents to process a complete RFP from start to finish in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Demo */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
          {/* Step 1: Load Sample RFP */}
          <Card className="border-2 border-primary/30 animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  Load Sample RFP
                </CardTitle>
                {currentStep >= 1 && (
                  <CheckCircle2 className="w-6 h-6 text-status-complete" />
                )}
              </div>
              <CardDescription>
                Start with a realistic cable procurement RFP
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentStep === 0 && (
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleLoadRFP}
                  className="group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Load Sample RFP
                </Button>
              )}

              {currentStep >= 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border">
                    <div>
                      <p className="text-sm text-muted-foreground">Item Description</p>
                      <p className="font-semibold">{sampleRFP.item}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Quantity Required</p>
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
                      <p className="text-sm text-muted-foreground">Voltage Rating</p>
                      <p className="font-semibold">{sampleRFP.voltage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Standard Compliance</p>
                      <p className="font-semibold">{sampleRFP.standard}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 2: Extract Requirements */}
          {currentStep >= 1 && (
            <Card className="border-2 border-primary/30 animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    Extract Requirements
                  </CardTitle>
                  {currentStep >= 2 && (
                    <CheckCircle2 className="w-6 h-6 text-status-complete" />
                  )}
                </div>
                <CardDescription>
                  AI parses and structures all RFP specifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStep === 1 && (
                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={handleExtractRequirements}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Extract Requirements
                  </Button>
                )}

                {currentStep >= 2 && (
                  <div className="space-y-3 animate-fade-in-up">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Voltage: {sampleRFP.voltage}
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Insulation: {sampleRFP.insulation}
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Armouring: {sampleRFP.armouring}
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Size: {sampleRFP.size}
                      </Badge>
                      <Badge variant="outline" className="border-status-complete text-status-complete">
                        ✓ Standard: {sampleRFP.standard}
                      </Badge>
                    </div>
                    <div className="p-4 bg-status-complete/10 border border-status-complete/20 rounded-lg">
                      <p className="text-sm font-medium mb-2">Tests Required:</p>
                      <div className="flex flex-wrap gap-2">
                        {sampleRFP.tests.map((test, idx) => (
                          <Badge key={idx} className="bg-status-complete text-white">
                            {test}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Technical Matching */}
          {currentStep >= 2 && (
            <Card className="border-2 border-agent-technical/30 animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-agent-technical/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-agent-technical">3</span>
                    </div>
                    Technical Matching
                  </CardTitle>
                  {currentStep >= 3 && (
                    <CheckCircle2 className="w-6 h-6 text-status-complete" />
                  )}
                </div>
                <CardDescription>
                  Match RFP specs against product database with AI-powered scoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStep === 2 && (
                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={handleTechnicalMatching}
                    className="bg-agent-technical hover:bg-agent-technical/90"
                  >
                    <Cpu className="w-5 h-5 mr-2" />
                    Run Technical Matching
                  </Button>
                )}

                {currentStep >= 3 && (
                  <div className="space-y-4 animate-fade-in-up">
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>SKU Code</TableHead>
                            <TableHead>Match %</TableHead>
                            <TableHead>Key Parameters</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {skuMatches.map((match, idx) => (
                            <TableRow key={match.sku}>
                              <TableCell className="font-semibold">{match.sku}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-24 bg-muted rounded-full h-2">
                                    <div 
                                      className={`h-full rounded-full ${
                                        match.match >= 95 ? 'bg-status-complete' : 
                                        match.match >= 80 ? 'bg-status-active' : 
                                        'bg-status-warning'
                                      }`}
                                      style={{ width: `${match.match}%` }}
                                    />
                                  </div>
                                  <span className="font-bold">{match.match}%</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="text-sm space-y-1">
                                  <div>{match.insulation} / {match.armouring}</div>
                                  <div className="text-muted-foreground">{match.voltage} • {match.size}</div>
                                </div>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground max-w-xs">
                                {match.reason}
                              </TableCell>
                              <TableCell className="text-right">
                                {idx === 0 && (
                                  <Badge className="bg-status-complete text-white">
                                    Selected
                                  </Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                      {skuMatches.map((match, idx) => (
                        <div key={match.sku} className="border rounded-lg p-4 space-y-3 bg-card">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg">{match.sku}</h3>
                            {idx === 0 && (
                              <Badge className="bg-status-complete text-white">
                                Selected
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-muted rounded-full h-2">
                              <div 
                                className={`h-full rounded-full ${
                                  match.match >= 95 ? 'bg-status-complete' : 
                                  match.match >= 80 ? 'bg-status-active' : 
                                  'bg-status-warning'
                                }`}
                                style={{ width: `${match.match}%` }}
                              />
                            </div>
                            <span className="font-bold">{match.match}%</span>
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">{match.insulation} / {match.armouring}</p>
                            <p className="text-muted-foreground">{match.voltage} • {match.size}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{match.reason}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border">
                      <p className="text-sm font-medium mb-2">Spec Match Metric Explanation:</p>
                      <p className="text-sm text-muted-foreground">
                        Calculated based on parameter-by-parameter comparison with equal weightage across voltage, insulation, armouring, size, and standard compliance.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 4: Pricing Calculation */}
          {currentStep >= 3 && (
            <Card className="border-2 border-agent-pricing/30 animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-agent-pricing/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-agent-pricing">4</span>
                    </div>
                    Pricing Calculation
                  </CardTitle>
                  {currentStep >= 4 && (
                    <CheckCircle2 className="w-6 h-6 text-status-complete" />
                  )}
                </div>
                <CardDescription>
                  Calculate complete cost breakdown including materials and testing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStep === 3 && (
                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={handlePricingCalculation}
                    className="bg-agent-pricing hover:bg-agent-pricing/90"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Calculate Pricing
                  </Button>
                )}

                {currentStep >= 4 && (
                  <div className="space-y-4 animate-fade-in-up">
                    <div className="p-6 bg-muted/30 rounded-lg border space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="text-sm text-muted-foreground">Selected SKU</p>
                          <p className="font-bold text-lg">{pricingData.sku}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Unit Price</p>
                          <p className="font-bold text-lg">₹{pricingData.pricePerMeter}/m</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b">
                        <div>
                          <p className="text-sm text-muted-foreground">Material Cost</p>
                          <p className="font-medium">{pricingData.quantity}m × ₹{pricingData.pricePerMeter}</p>
                        </div>
                        <p className="text-xl font-bold">₹{pricingData.materialCost.toLocaleString()}</p>
                      </div>

                      <div className="space-y-3 pb-4 border-b">
                        <p className="text-sm text-muted-foreground font-medium">Testing Costs</p>
                        {pricingData.tests.map((test) => (
                          <div key={test.name} className="flex justify-between items-center ml-4">
                            <p className="text-sm">{test.name}</p>
                            <p className="font-semibold">₹{test.cost.toLocaleString()}</p>
                          </div>
                        ))}
                        <div className="flex justify-between items-center ml-4 pt-2">
                          <p className="font-semibold">Total Test Costs</p>
                          <p className="font-bold">₹{pricingData.totalTestCost.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <p className="text-xl font-bold">Grand Total</p>
                        <p className="text-3xl font-bold text-agent-pricing">
                          ₹{pricingData.grandTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 5: Generate Response */}
          {currentStep >= 4 && (
            <Card className="border-2 border-agent-orchestrator/30 animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-agent-orchestrator/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-agent-orchestrator">5</span>
                    </div>
                    Generate Final Response
                  </CardTitle>
                </div>
                <CardDescription>
                  Compile all agent outputs into professional RFP response document
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-status-complete/10 to-primary/10 rounded-lg border-2 border-status-complete/20">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-status-complete" />
                    <div>
                      <p className="font-bold text-lg">All Agent Processing Complete!</p>
                      <p className="text-sm text-muted-foreground">RFP response is ready for generation</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-card rounded-lg border">
                      <p className="text-2xl font-bold text-status-complete">100%</p>
                      <p className="text-sm text-muted-foreground">Spec Match</p>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg border">
                      <p className="text-2xl font-bold text-agent-pricing">₹5.14L</p>
                      <p className="text-sm text-muted-foreground">Total Cost</p>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg border">
                      <p className="text-2xl font-bold text-primary">92%</p>
                      <p className="text-sm text-muted-foreground">Confidence</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={handleGenerateResponse}
                    className="group"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Generate Final Response
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
