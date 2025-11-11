import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, Target, Download } from "lucide-react";

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [monthlyRFPs, setMonthlyRFPs] = useState(20);
  const [avgRFPValue, setAvgRFPValue] = useState(50000);
  const [currentResponseTime, setCurrentResponseTime] = useState(80); // hours

  // Calculations
  const avgHourlyCost = 75; // Average cost per hour for RFP team member
  const currentTimeCost = (monthlyRFPs * currentResponseTime * avgHourlyCost);
  const rfpaiResponseTime = Math.round(currentResponseTime / 10); // 10x faster
  const rfpaiTimeCost = (monthlyRFPs * rfpaiResponseTime * avgHourlyCost);
  const monthlySavings = currentTimeCost - rfpaiTimeCost;
  const annualSavings = monthlySavings * 12;
  const hoursSavedMonthly = monthlyRFPs * (currentResponseTime - rfpaiResponseTime);
  
  // Win rate improvement (conservative 20%)
  const currentWins = Math.round(monthlyRFPs * 0.45); // 45% baseline
  const improvedWins = Math.round(monthlyRFPs * 0.54); // 54% with RFP AI
  const additionalRevenue = (improvedWins - currentWins) * avgRFPValue * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card className="border-2 hover:border-primary/50 transition-all">
          <CardContent className="p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Your Current Situation</h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Team Size</Label>
                    <span className="text-lg font-bold text-primary">{teamSize} people</span>
                  </div>
                  <Slider
                    value={[teamSize]}
                    onValueChange={(value) => setTeamSize(value[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Number of team members working on RFPs
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Monthly RFPs</Label>
                    <span className="text-lg font-bold text-primary">{monthlyRFPs} RFPs</span>
                  </div>
                  <Slider
                    value={[monthlyRFPs]}
                    onValueChange={(value) => setMonthlyRFPs(value[0])}
                    min={5}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Average number of RFPs your team handles monthly
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Average RFP Value</Label>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(avgRFPValue)}
                    </span>
                  </div>
                  <Slider
                    value={[avgRFPValue]}
                    onValueChange={(value) => setAvgRFPValue(value[0])}
                    min={10000}
                    max={500000}
                    step={10000}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Average contract value per RFP win
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Response Time (hours)</Label>
                    <span className="text-lg font-bold text-primary">{currentResponseTime}h</span>
                  </div>
                  <Slider
                    value={[currentResponseTime]}
                    onValueChange={(value) => setCurrentResponseTime(value[0])}
                    min={20}
                    max={200}
                    step={10}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Average hours to complete one RFP response
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                * Calculations based on industry averages: $75/hour team cost, 10x speed improvement, 
                20% win rate increase (from 45% to 54%)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <div className="space-y-6">
          <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Your Projected ROI</h3>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-background/50 backdrop-blur">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-agent-pricing" />
                    <p className="text-sm font-medium text-muted-foreground">Annual Cost Savings</p>
                  </div>
                  <p className="text-4xl font-bold gradient-text">
                    {formatCurrency(annualSavings)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatCurrency(monthlySavings)}/month saved on team time
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-background/50 backdrop-blur">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-agent-technical" />
                    <p className="text-sm font-medium text-muted-foreground">Time Saved</p>
                  </div>
                  <p className="text-4xl font-bold gradient-text">
                    {hoursSavedMonthly.toLocaleString()}h
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    per month, or {Math.round(hoursSavedMonthly / 8)} work days
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-background/50 backdrop-blur">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-agent-sales" />
                    <p className="text-sm font-medium text-muted-foreground">Additional Revenue</p>
                  </div>
                  <p className="text-4xl font-bold gradient-text">
                    {formatCurrency(additionalRevenue)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    annually from {improvedWins - currentWins} more wins/month
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Response Time</p>
                  <p className="text-2xl font-bold">{currentResponseTime}h</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">With RFP AI</p>
                  <p className="text-2xl font-bold text-primary">{rfpaiResponseTime}h</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Win Rate</p>
                  <p className="text-2xl font-bold">45%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">With RFP AI</p>
                  <p className="text-2xl font-bold text-primary">54%</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download Full ROI Report
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Get a detailed PDF with your custom ROI analysis
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
