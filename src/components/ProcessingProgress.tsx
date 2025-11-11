import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";

interface ProcessingStage {
  label: string;
  duration: number; // in milliseconds
}

interface ProcessingProgressProps {
  stages: ProcessingStage[];
  onComplete?: () => void;
}

export function ProcessingProgress({ stages, onComplete }: ProcessingProgressProps) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const totalDuration = stages.reduce((sum, stage) => sum + stage.duration, 0);
  const currentStage = stages[currentStageIndex];

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const stageStartTime = stages
        .slice(0, currentStageIndex)
        .reduce((sum, stage) => sum + stage.duration, 0);
      
      const stageProgress = Math.min((elapsed / currentStage.duration) * 100, 100);
      const overallProgress = ((stageStartTime + (elapsed / totalDuration * 100)) / stages.length) * 100;
      
      setProgress(Math.min(overallProgress, 100));
      setTimeRemaining(Math.max(0, Math.ceil((totalDuration - elapsed) / 1000)));

      if (elapsed < currentStage.duration) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        if (currentStageIndex < stages.length - 1) {
          setCurrentStageIndex(currentStageIndex + 1);
        } else {
          setProgress(100);
          onComplete?.();
        }
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, [currentStageIndex, currentStage, stages, totalDuration, onComplete]);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-3">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold">{currentStage?.label}</p>
            <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>Stage {currentStageIndex + 1} of {stages.length}</span>
        <span>~{timeRemaining}s remaining</span>
      </div>
    </div>
  );
}
