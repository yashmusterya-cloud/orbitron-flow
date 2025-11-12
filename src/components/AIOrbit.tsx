import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AIOrbitProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AIOrbit({ className, size = "md" }: AIOrbitProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[600px] h-[600px]",
  };

  return (
    <div ref={canvasRef} className={cn("relative", sizeClasses[size], className)}>
      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow flex items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-agent-orchestrator to-agent-technical rounded-full" />
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 animate-orbit">
        <div className="absolute inset-8 border-2 border-primary/20 rounded-full" />
      </div>
      <div className="absolute inset-0 animate-orbit-reverse">
        <div className="absolute inset-16 border-2 border-accent/20 rounded-full" />
      </div>
      <div className="absolute inset-0 animate-orbit-slow">
        <div className="absolute inset-24 border-2 border-agent-orchestrator/20 rounded-full" />
      </div>

      {/* Agent Nodes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <AgentNode color="orchestrator" label="Main Agent" shortLabel="O" position="top" />
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2">
        <AgentNode color="technical" label="Technical Agent" shortLabel="T" position="right" />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <AgentNode color="pricing" label="Pricing Agent" shortLabel="P" position="bottom" />
      </div>
      <div className="absolute top-1/2 left-8 -translate-y-1/2">
        <AgentNode color="sales" label="Sales Agent" shortLabel="S" position="left" />
      </div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line
          x1="50%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="75%"
          y2="50%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="75%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="25%"
          y2="50%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}

interface AgentNodeProps {
  color: "orchestrator" | "technical" | "pricing" | "sales";
  label: string;
  shortLabel: string;
  position: "top" | "right" | "bottom" | "left";
}

function AgentNode({ color, label, shortLabel, position }: AgentNodeProps) {
  const colorClasses = {
    orchestrator: "bg-agent-orchestrator shadow-[0_0_20px_hsl(var(--agent-orchestrator))]",
    technical: "bg-agent-technical shadow-[0_0_20px_hsl(var(--agent-technical))]",
    pricing: "bg-agent-pricing shadow-[0_0_20px_hsl(var(--agent-pricing))]",
    sales: "bg-agent-sales shadow-[0_0_20px_hsl(var(--agent-sales))]",
  };

  const labelPositionClasses = {
    top: "top-full left-1/2 -translate-x-1/2 mt-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  return (
    <div className="group relative cursor-pointer flex items-center">
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base transition-all duration-300 hover:scale-125",
          colorClasses[color]
        )}
      >
        {shortLabel}
      </div>
      <div className={cn(
        "absolute px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-border rounded-lg text-sm font-medium whitespace-nowrap shadow-lg",
        labelPositionClasses[position]
      )}>
        {label}
      </div>
    </div>
  );
}
