import { useState } from "react";
import { ProgressStepper } from "@/components/ProgressStepper";
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
      { name: "Tensile test", cost: 3000 },
      { name: "Insulation resistance test (IR)", cost: 2500 },
      { name: "High voltage test (HV)", cost: 4000 },
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
      <ProgressStepper />

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

        {/* Pricing Calculation */}
        <Card className="mb-8 animate-fade-in-up stagger-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-agent-pricing" />
              Pricing Breakdown
            </CardTitle>
            <CardDescription>Detailed cost calculation for the selected product</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Material Cost */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-agent-pricing" />
                Material Cost
              </h3>
              <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Product Price (per meter)</span>
                  <span className="font-semibold">₹{pricingData.pricePerMeter}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Quantity Required</span>
                  <span className="font-semibold">{pricingData.quantity} meters</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between items-center">
                  <span className="font-semibold">Total Material Cost</span>
                  <span className="text-xl font-bold text-agent-pricing">
                    ₹{pricingData.materialCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Test Costs */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-agent-pricing" />
                Test Costs
              </h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Test Name</TableHead>
                      <TableHead className="text-right">Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingData.tests.map((test) => (
                      <TableRow key={test.name}>
                        <TableCell>{test.name}</TableCell>
                        <TableCell className="text-right font-semibold">
                          ₹{test.cost.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/30">
                      <TableCell className="font-semibold">Total Test Costs</TableCell>
                      <TableCell className="text-right font-bold text-agent-pricing">
                        ₹{pricingData.testCosts.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Grand Total */}
            <div className="bg-gradient-to-br from-agent-pricing/10 to-status-complete/10 p-6 rounded-lg border-2 border-agent-pricing/30">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Grand Total</p>
                  <p className="text-4xl font-bold text-agent-pricing">
                    ₹{pricingData.grandTotal.toLocaleString()}
                  </p>
                </div>
                <CheckCircle2 className="w-12 h-12 text-status-complete" />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Material Cost: ₹{pricingData.materialCost.toLocaleString()} + Test Costs: ₹
                {pricingData.testCosts.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Proceed Button */}
        <div className="flex justify-end animate-fade-in-up stagger-3">
          <Button size="lg" onClick={handleProceedToFinal} className="gap-2">
            Generate Final RFP Response
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
