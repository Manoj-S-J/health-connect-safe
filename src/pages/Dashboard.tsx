
import React, { useState, useEffect } from 'react';
import VitalsCard from '@/components/VitalsCard';
import BluetoothStatus from '@/components/BluetoothStatus';
import EmergencyCard from '@/components/EmergencyCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

const Dashboard = () => {
  const [vitals, setVitals] = useState({
    heartRate: { value: 75, status: 'normal' as const },
    bloodPressure: { value: 120, status: 'normal' as const },
    temperature: { value: 37.0, status: 'normal' as const },
    oxygenLevel: { value: 98, status: 'normal' as const },
  });

  const [heartRateData, setHeartRateData] = useState<{ time: string; value: number; }[]>([]);

  // Simulate real-time monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate vitals fluctuation
      const newHeartRate = vitals.heartRate.value + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
      const newTemp = parseFloat((vitals.temperature.value + (Math.random() > 0.5 ? 0.1 : -0.1) * Math.random()).toFixed(1));
      const newOxygen = Math.min(100, Math.max(90, vitals.oxygenLevel.value + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2)));
      const newBP = vitals.bloodPressure.value + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
      
      // Update status based on new values
      const hrStatus = newHeartRate > 100 || newHeartRate < 60 ? 
        (newHeartRate > 120 || newHeartRate < 50 ? 'critical' : 'warning') : 'normal';
      const tempStatus = newTemp > 37.8 || newTemp < 36.0 ? 
        (newTemp > 38.5 || newTemp < 35.0 ? 'critical' : 'warning') : 'normal';
      const oxyStatus = newOxygen < 95 ? (newOxygen < 90 ? 'critical' : 'warning') : 'normal';
      const bpStatus = newBP > 140 || newBP < 90 ? 
        (newBP > 160 || newBP < 80 ? 'critical' : 'warning') : 'normal';
      
      setVitals({
        heartRate: { value: newHeartRate, status: hrStatus },
        bloodPressure: { value: newBP, status: bpStatus },
        temperature: { value: newTemp, status: tempStatus },
        oxygenLevel: { value: newOxygen, status: oxyStatus }
      });

      // Add new data point for heart rate chart
      const now = new Date();
      const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      setHeartRateData(prev => {
        const newData = [...prev, { time: timeString, value: newHeartRate }];
        if (newData.length > 20) {
          return newData.slice(newData.length - 20);
        }
        return newData;
      });

      // Show warning toast for critical readings
      if (hrStatus === 'critical' || tempStatus === 'critical' || oxyStatus === 'critical' || bpStatus === 'critical') {
        toast.warning("Critical health metrics detected!", {
          description: "Please check your vital signs.",
          duration: 5000,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [vitals]);

  const handleEmergency = () => {
    toast.error("Emergency alert sent to your guardian!", {
      duration: 8000,
      description: "If they don't respond within 2 minutes, emergency services will be contacted.",
    });
  };

  return (
    <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Health Dashboard</h1>
      
      <div className="mb-6">
        <BluetoothStatus />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <VitalsCard 
          title="Heart Rate" 
          value={vitals.heartRate.value} 
          unit="bpm" 
          icon="heart" 
          status={vitals.heartRate.status}
          min={40}
          max={140}
        />
        <VitalsCard 
          title="Blood Pressure" 
          value={vitals.bloodPressure.value} 
          unit="mmHg" 
          icon="activity" 
          status={vitals.bloodPressure.status}
          min={80}
          max={180}
        />
        <VitalsCard 
          title="Temperature" 
          value={vitals.temperature.value} 
          unit="°C" 
          icon="thermometer" 
          status={vitals.temperature.status}
          min={35}
          max={40}
        />
        <VitalsCard 
          title="Oxygen Level" 
          value={vitals.oxygenLevel.value} 
          unit="%" 
          icon="oxygen" 
          status={vitals.oxygenLevel.status}
          min={85}
          max={100}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle>Heart Rate Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="vital-chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={heartRateData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[40, 140]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1E88E5" 
                    strokeWidth={2} 
                    dot={{ strokeWidth: 2 }} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <EmergencyCard onEmergencyTriggered={handleEmergency} />
      </div>
    </div>
  );
};

export default Dashboard;
