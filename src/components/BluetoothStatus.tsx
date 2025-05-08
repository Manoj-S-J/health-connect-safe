
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bluetooth } from 'lucide-react';
import { toast } from 'sonner';

const BluetoothStatus = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  
  const connectBluetooth = async () => {
    if (!navigator.bluetooth) {
      toast.error("Bluetooth is not supported in your browser");
      return;
    }
    
    setIsConnecting(true);
    
    try {
      // Simulate connection (in a real app, we would use the Web Bluetooth API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsConnected(true);
      toast.success("Smartwatch connected successfully");
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
      toast.error("Failed to connect to smartwatch");
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnectBluetooth = () => {
    setIsConnected(false);
    toast.info("Smartwatch disconnected");
  };

  return (
    <Card className="shadow-md">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Bluetooth className={`h-6 w-6 ${isConnected ? 'text-health-blue' : 'text-gray-400'}`} />
          <div className="ml-3">
            <div className="text-sm font-medium">
              {isConnected ? 'Smartwatch Connected' : 'No Device Connected'}
            </div>
            <div className="text-xs text-muted-foreground">
              {isConnected ? 'Monitoring active' : 'Connect your device to start monitoring'}
            </div>
          </div>
        </div>
        <Button 
          variant={isConnected ? "outline" : "default"}
          size="sm"
          disabled={isConnecting}
          onClick={isConnected ? disconnectBluetooth : connectBluetooth}>
          {isConnecting ? "Connecting..." : isConnected ? "Disconnect" : "Connect"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BluetoothStatus;
