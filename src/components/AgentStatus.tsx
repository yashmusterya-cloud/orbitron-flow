import { Check, Loader2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

type AgentStatusType = "complete" | "processing" | "pending";

type Agent = {
  id: string;
  name: string;
  route: string;
};

const agents: Agent[] = [
  { id: "main-start", name: "Main Agent", route: "/" },
  { id: "sales", name: "Sales Agent", route: "/live-demo" },
  { id: "technical", name: "Technical Agent", route: "/technical-agent" },
  { id: "pricing", name: "Pricing Agent", route: "/pricing-agent" },
  { id: "main-final", name: "Main Agent", route: "/final-response" },
];

export function AgentStatus() {
  const location = useLocation();

  const getAgentStatus = (agentRoute: string): AgentStatusType => {
    const currentIndex = agents.findIndex((a) => a.route === location.pathname);
    const agentIndex = agents.findIndex((a) => a.route === agentRoute);

    if (agentIndex < currentIndex) return "complete";
    if (agentIndex === currentIndex) return "processing";
    return "pending";
  };

  return (
    <div className="bg-muted/30 border-y border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {agents.map((agent) => {
            const status = getAgentStatus(agent.route);

            return (
              <div
                key={agent.id}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300",
                  status === "complete" && "bg-status-complete/10",
                  status === "processing" && agent.name === "Main Agent" && "bg-agent-orchestrator/10 animate-pulse-glow",
                  status === "processing" && agent.name === "Sales Agent" && "bg-agent-sales/10 animate-pulse-glow",
                  status === "processing" && agent.name === "Technical Agent" && "bg-agent-technical/10 animate-pulse-glow",
                  status === "processing" && agent.name === "Pricing Agent" && "bg-agent-pricing/10 animate-pulse-glow",
                  status === "pending" && "bg-muted/50"
                )}
                title={
                  agent.name === "Main Agent" && status === "processing"
                    ? agent.id === "main-start" 
                      ? "Main Agent: Orchestrating workflow"
                      : "Main Agent: Generating final response"
                    : agent.name === "Sales Agent"
                    ? "Sales Agent: Identifying and qualifying RFPs"
                    : agent.name === "Technical Agent"
                    ? "Technical Agent: Matching SKUs to specifications"
                    : agent.name === "Pricing Agent"
                    ? "Pricing Agent: Calculating costs and pricing"
                    : ""
                }
              >
                {status === "complete" && (
                  <Check className="w-4 h-4 text-status-complete" />
                )}
                {status === "processing" && (
                  <Loader2 className={cn(
                    "w-4 h-4 animate-spin",
                    agent.name === "Main Agent" && "text-agent-orchestrator",
                    agent.name === "Sales Agent" && "text-agent-sales",
                    agent.name === "Technical Agent" && "text-agent-technical",
                    agent.name === "Pricing Agent" && "text-agent-pricing"
                  )} />
                )}
                {status === "pending" && (
                  <Circle className="w-4 h-4 text-muted-foreground" />
                )}
                <span
                  className={cn(
                    "text-sm font-medium",
                    status === "complete" && "text-status-complete",
                    status === "processing" && agent.name === "Main Agent" && "text-agent-orchestrator",
                    status === "processing" && agent.name === "Sales Agent" && "text-agent-sales",
                    status === "processing" && agent.name === "Technical Agent" && "text-agent-technical",
                    status === "processing" && agent.name === "Pricing Agent" && "text-agent-pricing",
                    status === "pending" && "text-muted-foreground"
                  )}
                >
                  {agent.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
