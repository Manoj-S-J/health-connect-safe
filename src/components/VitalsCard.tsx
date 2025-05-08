
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, Thermometer, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

type VitalStatus = 'normal' | 'warning' | 'critical';

interface VitalsCardProps {
  title: string;
  value: number;
  unit: string;
  icon: 'heart' | 'activity' | 'thermometer' | 'oxygen';
  status: VitalStatus;
  min: number;
  max: number;
}

const VitalsCard = ({ title, value, unit, icon, status, min, max }: VitalsCardProps) => {
  const progress = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  
  const statusColor = {
    normal: "text-health-green",
    warning: "text-amber-500",
    critical: "text-alert-red"
  };

  const progressColor = {
    normal: "bg-health-green",
    warning: "bg-amber-500",
    critical: "bg-alert-red"
  };

  const getIcon = () => {
    switch(icon) {
      case 'heart':
        return <Heart className={cn("h-5 w-5", statusColor[status], status === 'critical' ? "animate-heartbeat" : "")} />;
      case 'activity':
        return <Activity className={cn("h-5 w-5", statusColor[status])} />;
      case 'thermometer':
        return <Thermometer className={cn("h-5 w-5", statusColor[status])} />;
      case 'oxygen':
        return <Circle className={cn("h-5 w-5", statusColor[status])} />;
      default:
        return <Activity className={cn("h-5 w-5", statusColor[status])} />;
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="relative">
          {status === 'critical' && <div className={`pulse-ring bg-alert-red/30`}></div>}
          {getIcon()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline mt-1">
          <div className="text-3xl font-bold">{value}</div>
          <div className="ml-1 text-sm text-muted-foreground">{unit}</div>
        </div>
        <Progress value={progress} className={`h-2 mt-3 ${progressColor[status]}`} />
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VitalsCard;
