import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

export type Step = {
  id: string;
  label: string;
  path: string;
};

const steps: Step[] = [
  { id: "main-start", label: "Main Agent", path: "/" },
  { id: "sales", label: "Sales Agent", path: "/live-demo" },
  { id: "technical", label: "Technical Agent", path: "/technical-agent" },
  { id: "pricing", label: "Pricing Agent", path: "/pricing-agent" },
  { id: "main-final", label: "Main Agent", path: "/final-response" },
];

export function ProgressStepper() {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentStepIndex = () => {
    const currentStep = steps.findIndex((step) => step.path === location.pathname);
    return currentStep === -1 ? 0 : currentStep;
  };

  const currentStepIndex = getCurrentStepIndex();

  const getStepStatus = (index: number) => {
    if (index < currentStepIndex) return "complete";
    if (index === currentStepIndex) return "current";
    return "upcoming";
  };

  const handleStepClick = (index: number, path: string) => {
    // Only allow navigation to completed or current steps
    if (index <= currentStepIndex) {
      navigate(path);
    }
  };

  return (
    <div className="bg-background/95 backdrop-blur-lg border-b border-border shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const isClickable = index <= currentStepIndex;

            return (
              <div key={step.id} className="flex items-center flex-shrink-0">
                {/* Step Circle */}
                <button
                  onClick={() => handleStepClick(index, step.path)}
                  disabled={!isClickable}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300",
                    isClickable && "cursor-pointer hover:bg-muted/50",
                    !isClickable && "cursor-not-allowed opacity-50"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                      status === "complete" &&
                        "bg-status-complete border-status-complete text-white",
                      status === "current" && (step.id === "main-start" || step.id === "main-final") &&
                        "bg-agent-orchestrator border-agent-orchestrator text-white animate-pulse-glow",
                      status === "current" && step.id === "sales" &&
                        "bg-agent-sales border-agent-sales text-white animate-pulse-glow",
                      status === "current" && step.id === "technical" &&
                        "bg-agent-technical border-agent-technical text-white animate-pulse-glow",
                      status === "current" && step.id === "pricing" &&
                        "bg-agent-pricing border-agent-pricing text-white animate-pulse-glow",
                      status === "upcoming" &&
                        "bg-muted border-muted-foreground/30 text-muted-foreground"
                    )}
                  >
                    {status === "complete" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>

                  {/* Step Label */}
                  <span
                    className={cn(
                      "hidden md:block text-sm font-medium transition-colors whitespace-nowrap",
                      status === "complete" && "text-status-complete",
                      status === "current" && (step.id === "main-start" || step.id === "main-final") && "text-agent-orchestrator font-semibold",
                      status === "current" && step.id === "sales" && "text-agent-sales font-semibold",
                      status === "current" && step.id === "technical" && "text-agent-technical font-semibold",
                      status === "current" && step.id === "pricing" && "text-agent-pricing font-semibold",
                      status === "upcoming" && "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </span>
                </button>

                {/* Arrow Separator */}
                {index < steps.length - 1 && (
                  <ChevronRight
                    className={cn(
                      "w-5 h-5 mx-2 flex-shrink-0 transition-colors",
                      index < currentStepIndex && "text-status-complete",
                      index === currentStepIndex && "text-agent-technical",
                      index > currentStepIndex && "text-muted-foreground/30"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: Current Step Indicator */}
        <div className="md:hidden mt-2 text-center">
          <span className="text-sm text-muted-foreground">
            Step {currentStepIndex + 1} of {steps.length}:{" "}
            <span className="font-semibold text-agent-technical">
              {steps[currentStepIndex].label}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
