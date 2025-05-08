
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface EmergencyCardProps {
  onEmergencyTriggered: () => void;
}

const EmergencyCard = ({ onEmergencyTriggered }: EmergencyCardProps) => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(5);
  
  const triggerAlert = () => {
    setIsCountingDown(true);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCountingDown(false);
          onEmergencyTriggered();
          return 5;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const cancelAlert = () => {
    setIsCountingDown(false);
    setCountdown(5);
    toast.info("Emergency alert canceled");
  };

  const callEmergency = () => {
    toast.info("Calling emergency services...", {
      action: {
        label: "End Call",
        onClick: () => toast.info("Call ended")
      }
    });
  };

  return (
    <Card className={isCountingDown ? "border-alert-red border-2 shadow-lg" : "shadow-md"}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-alert-red" />
          Emergency Actions
        </CardTitle>
        <CardDescription>Get help quickly in case of emergency</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isCountingDown ? (
          <div className="text-center">
            <div className="text-xl font-bold text-alert-red">Sending alert in {countdown}...</div>
            <div className="mt-2 text-muted-foreground">Press cancel if triggered by mistake</div>
          </div>
        ) : (
          <div className="text-sm">
            Pressing the emergency button will alert your registered guardian.
            If they don't respond within 2 minutes, emergency services will be contacted.
          </div>
        )}
      </CardContent>
      <CardFooter className="flex space-x-2">
        {isCountingDown ? (
          <Button onClick={cancelAlert} className="w-full" variant="outline">
            Cancel
          </Button>
        ) : (
          <>
            <Button onClick={triggerAlert} className="w-full bg-alert-red hover:bg-red-700">
              <AlertCircle className="h-4 w-4 mr-2" /> Trigger Alert
            </Button>
            <Button onClick={callEmergency} variant="outline" className="w-full">
              <Phone className="h-4 w-4 mr-2" /> Call Helpline
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default EmergencyCard;
