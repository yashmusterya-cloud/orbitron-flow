import { useState } from "react";
import { ProgressStepper } from "@/components/ProgressStepper";
import { AgentStatus } from "@/components/AgentStatus";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, CheckCircle2, ArrowRight, Calculator } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PricingAgent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSKU, rfpRequirements } = location.state || {
    selectedSKU: "AP-XLPE-95A",
    rfpRequirements: {
      item: "1100V, 3C 95 sqmm Aluminium Cable",
      quantity: "1200 meters",
    },
  };

  const [pricingCalculated] = useState(true);

  const pricingData = {
    sku: selectedSKU,
    pricePerMeter: 420,
    quantity: 1200,
    materialCost: 504000,
    tests: [
      { name: "Tensile Strength Test", cost: 3000 },
      { name: "Insulation Resistance Test (IR)", cost: 2500 },
      { name: "High Voltage Test (HV)", cost: 4000 },
    ],
    testCosts: 9500,
    grandTotal: 513500,
  };

  const handleProceedToFinal = () => {
    navigate("/final-response", {
      state: {
        selectedSKU,
        rfpRequirements,
        pricingData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-40">
        <ProgressStepper />
        <AgentStatus />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Pricing Agent - Cost Calculation
          </h1>
          <p className="text-muted-foreground">
            AI-powered pricing calculation with material and test costs
          </p>
        </div>

        {/* Selected SKU Recap */}
        <Card className="mb-8 animate-fade-in-up stagger-1 border-status-complete/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-complete" />
              Selected Product
            </CardTitle>
            <CardDescription>SKU selected by Technical Agent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-status-complete">{selectedSKU}</p>
                <p className="text-muted-foreground mt-1">{rfpRequirements.item}</p>
              </div>
              <Badge className="bg-status-complete text-white">100% Match</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Material Costs Table */}
        <Card className="mb-8 animate-fade-in-up stagger-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-agent-pricing" />
              Material Costs
            </CardTitle>
            <CardDescription>Product pricing based on selected SKU</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product SKU</TableHead>
                    <TableHead className="text-right">Unit Price</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Total Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">{pricingData.sku}</TableCell>
                    <TableCell className="text-right">₹{pricingData.pricePerMeter}/meter</TableCell>
                    <TableCell className="text-right">{pricingData.quantity} meters</TableCell>
                    <TableCell className="text-right font-bold text-agent-pricing">
                      ₹{pricingData.materialCost.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell colSpan={3} className="font-semibold">
                      Total Material Cost
                    </TableCell>
                    <TableCell className="text-right font-bold text-xl text-agent-pricing">
                      ₹{pricingData.materialCost.toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <div className="border rounded-lg p-4 space-y-3 bg-card">
                <h3 className="font-bold text-lg text-primary">{pricingData.sku}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-muted-foreground">Unit Price</span>
                    <span className="font-semibold">₹{pricingData.pricePerMeter}/meter</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-muted-foreground">Quantity</span>
                    <span className="font-semibold">{pricingData.quantity} meters</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Total Cost</span>
                    <span className="text-xl font-bold text-agent-pricing">
                      ₹{pricingData.materialCost.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testing Costs Table */}
        <Card className="mb-8 animate-fade-in-up stagger-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-agent-pricing" />
              Testing Costs
            </CardTitle>
            <CardDescription>Required tests and associated costs</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Test Type</TableHead>
                    <TableHead className="text-right">Cost per Test</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Total Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.tests.map((test) => (
                    <TableRow key={test.name}>
                      <TableCell>{test.name}</TableCell>
                      <TableCell className="text-right">₹{test.cost.toLocaleString()}</TableCell>
                      <TableCell className="text-right">1</TableCell>
                      <TableCell className="text-right font-semibold">
                        ₹{test.cost.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/30">
                    <TableCell colSpan={3} className="font-semibold">
                      Total Testing Cost
                    </TableCell>
                    <TableCell className="text-right font-bold text-xl text-agent-pricing">
                      ₹{pricingData.testCosts.toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {pricingData.tests.map((test) => (
                <div key={test.name} className="border rounded-lg p-4 space-y-2 bg-card">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold">{test.name}</h4>
                    <span className="font-bold text-agent-pricing">₹{test.cost.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Quantity: 1</div>
                </div>
              ))}
              <div className="border-2 rounded-lg p-4 bg-muted/30">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Testing Cost</span>
                  <span className="text-xl font-bold text-agent-pricing">
                    ₹{pricingData.testCosts.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grand Total Section */}
        <Card className="mb-8 animate-fade-in-up stagger-4 border-2 border-status-complete/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-status-complete" />
              Grand Total
            </CardTitle>
            <CardDescription>Complete cost breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-lg text-muted-foreground">Total Material Cost</span>
                <span className="text-xl font-semibold">
                  ₹{pricingData.materialCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-lg text-muted-foreground">Total Testing Cost</span>
                <span className="text-xl font-semibold">
                  ₹{pricingData.testCosts.toLocaleString()}
                </span>
              </div>
              <div className="bg-gradient-to-br from-status-complete/10 to-agent-pricing/10 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Grand Total</p>
                    <p className="text-5xl font-bold text-status-complete">
                      ₹{pricingData.grandTotal.toLocaleString()}
                    </p>
                  </div>
                  <CheckCircle2 className="w-16 h-16 text-status-complete" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generate Final Response Button */}
        <div className="flex justify-end animate-fade-in-up stagger-5">
          <Button size="lg" onClick={handleProceedToFinal} className="gap-2">
            Generate Final Response
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
