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
  { id: "sales", name: "Sales Agent", route: "/" },
  { id: "technical", name: "Technical Agent", route: "/technical-agent" },
  { id: "pricing", name: "Pricing Agent", route: "/pricing-agent" },
  { id: "master", name: "Master Agent", route: "/final-response" },
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
                  status === "processing" && "bg-agent-technical/10 animate-pulse-glow",
                  status === "pending" && "bg-muted/50"
                )}
              >
                {status === "complete" && (
                  <Check className="w-4 h-4 text-status-complete" />
                )}
                {status === "processing" && (
                  <Loader2 className="w-4 h-4 text-agent-technical animate-spin" />
                )}
                {status === "pending" && (
                  <Circle className="w-4 h-4 text-muted-foreground" />
                )}
                <span
                  className={cn(
                    "text-sm font-medium",
                    status === "complete" && "text-status-complete",
                    status === "processing" && "text-agent-technical",
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
