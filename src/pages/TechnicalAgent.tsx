import { useState } from "react";
import { ProgressStepper } from "@/components/ProgressStepper";
import { AgentStatus } from "@/components/AgentStatus";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductMatch {
  sku: string;
  matchPercentage: number;
  specifications: {
    voltage: string;
    material: string;
    insulation: string;
    armouring: string;
    standard: string;
    size: string;
  };
  differences: string[];
}

const rfpRequirements = {
  item: "1100V, 3C 95 sqmm Aluminium Cable",
  quantity: "1200 meters",
  specifications: {
    voltage: "1100V",
    material: "Aluminium",
    insulation: "XLPE",
    armouring: "Aluminium",
    standard: "IS 7098 Part-II",
    size: "95 sqmm",
  },
};

const oemProducts: ProductMatch[] = [
  {
    sku: "AP-XLPE-95A",
    matchPercentage: 100,
    specifications: {
      voltage: "1100V",
      material: "Aluminium",
      insulation: "XLPE",
      armouring: "Aluminium",
      standard: "IS 7098-II",
      size: "95 sqmm",
    },
    differences: [],
  },
  {
    sku: "AP-XLPE-95C",
    matchPercentage: 87,
    specifications: {
      voltage: "1100V",
      material: "Aluminium",
      insulation: "XLPE",
      armouring: "Copper",
      standard: "IS 7098-II",
      size: "95 sqmm",
    },
    differences: ["Armouring: Copper instead of Aluminium"],
  },
  {
    sku: "AP-PVC-95A",
    matchPercentage: 78,
    specifications: {
      voltage: "1100V",
      material: "Aluminium",
      insulation: "PVC",
      armouring: "Aluminium",
      standard: "IS 7098-II",
      size: "95 sqmm",
    },
    differences: ["Insulation: PVC instead of XLPE"],
  },
];

export default function TechnicalAgent() {
  const [selectedSKU, setSelectedSKU] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-status-complete";
    if (percentage >= 70) return "text-status-warning";
    return "text-status-error";
  };

  const getMatchBadge = (percentage: number) => {
    if (percentage >= 90) return "bg-status-complete text-white";
    if (percentage >= 70) return "bg-status-warning text-white";
    return "bg-status-error text-white";
  };

  const handleProceedToPricing = () => {
    if (selectedSKU) {
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "Moving to Pricing Agent",
          description: "Product selected. Calculating costs...",
        });
        
        setTimeout(() => {
          navigate("/pricing-agent", { state: { selectedSKU, rfpRequirements } });
        }, 500);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressStepper />
      <AgentStatus />
      
      {/* Loading Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card p-8 rounded-lg shadow-xl border-2 border-primary/50 max-w-md w-full mx-4">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="w-16 h-16 animate-spin text-primary" />
              <h3 className="text-xl font-semibold">Processing...</h3>
              <p className="text-muted-foreground text-center">
                Moving to pricing calculation
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Technical Agent - SKU Matching
          </h1>
          <p className="text-muted-foreground">
            AI-powered specification matching and product recommendation
          </p>
        </div>

        {/* RFP Requirements Card */}
        <Card className="mb-8 animate-fade-in-up stagger-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-agent-technical" />
              RFP Requirements
            </CardTitle>
            <CardDescription>Product specifications requested by the client</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{rfpRequirements.item}</h3>
                <p className="text-muted-foreground">Quantity: {rfpRequirements.quantity}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(rfpRequirements.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm text-muted-foreground capitalize">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spec Match Metric Explanation */}
        <Card className="mb-8 animate-fade-in-up stagger-2 bg-accent/5 border-accent/20">
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">Spec Match Metric:</span> Calculated
              based on parameter-by-parameter comparison with equal weightage. Each matching
              specification contributes equally to the final match percentage.
            </p>
          </CardContent>
        </Card>

        {/* OEM Product Comparison Table */}
        <Card className="mb-8 animate-fade-in-up stagger-3">
          <CardHeader>
            <CardTitle>OEM Product Comparison</CardTitle>
            <CardDescription>Top 3 matching products from our database</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {oemProducts.map((product, index) => (
                  <Card
                    key={product.sku}
                    className={`transition-all duration-300 hover:shadow-lg ${
                      selectedSKU === product.sku
                        ? "border-agent-technical border-2 shadow-lg"
                        : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* SKU and Match Percentage */}
                        <div className="flex-shrink-0 lg:w-48">
                          <h3 className="text-xl font-bold mb-2">{product.sku}</h3>
                          <Badge className={getMatchBadge(product.matchPercentage)}>
                            {product.matchPercentage}% Match
                          </Badge>
                          <div className="mt-3">
                            <Progress
                              value={product.matchPercentage}
                              className={`h-2 ${getMatchColor(product.matchPercentage)}`}
                            />
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="flex-grow">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {Object.entries(product.specifications).map(([key, value]) => {
                              const isMatch =
                                rfpRequirements.specifications[
                                  key as keyof typeof rfpRequirements.specifications
                                ] === value;
                              return (
                                <div key={key} className="flex items-start gap-2">
                                  {isMatch ? (
                                    <CheckCircle2 className="w-4 h-4 text-status-complete mt-0.5" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-status-error mt-0.5" />
                                  )}
                                  <div>
                                    <p className="text-sm text-muted-foreground capitalize">
                                      {key}
                                    </p>
                                    <p className={`font-medium ${!isMatch && "text-status-error"}`}>
                                      {value}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Differences */}
                          {product.differences.length > 0 && (
                            <div className="mt-4 p-3 bg-status-error/10 rounded-lg border border-status-error/20">
                              <p className="text-sm font-semibold text-status-error mb-1">
                                Differences:
                              </p>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {product.differences.map((diff, i) => (
                                  <li key={i}>• {diff}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Select Button */}
                        <div className="flex-shrink-0">
                          <Button
                            variant={selectedSKU === product.sku ? "default" : "outline"}
                            onClick={() => setSelectedSKU(product.sku)}
                            className="w-full lg:w-auto"
                          >
                            {selectedSKU === product.sku ? "Selected" : "Select"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proceed to Pricing */}
        <div className="flex justify-end animate-fade-in-up stagger-4">
          <Button
            size="lg"
            onClick={handleProceedToPricing}
            disabled={!selectedSKU || isProcessing}
            className="gap-2"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Proceed to Pricing
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
