
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Save, FileText, User, Phone, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';

const Profile = () => {
  const handleSaveProfile = () => {
    toast.success("Profile information saved successfully!");
  };

  const handleSaveMedical = () => {
    toast.success("Medical information saved successfully!");
  };

  const handleSaveEmergency = () => {
    toast.success("Emergency contacts updated successfully!");
  };

  const handleUploadDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      toast.success(`Document "${e.target.files[0].name}" uploaded successfully!`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h1>
        
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="medical">Medical Details</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 234 567 8900" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Health Street, Medical City, 12345" />
                </div>
                
                <Button onClick={handleSaveProfile}>
                  <Save className="h-4 w-4 mr-2" /> Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medical">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Medical Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Input id="bloodType" defaultValue="O+" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input id="dateOfBirth" type="date" defaultValue="1985-05-15" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea id="allergies" defaultValue="Penicillin, Peanuts" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="conditions">Existing Conditions</Label>
                  <Textarea id="conditions" defaultValue="Hypertension, Diabetes Type 2" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea id="medications" defaultValue="Lisinopril 10mg daily, Metformin 500mg twice daily" />
                </div>
                
                <Button onClick={handleSaveMedical}>
                  <Save className="h-4 w-4 mr-2" /> Save Medical Info
                </Button>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName1">Contact Name</Label>
                      <Input id="emergencyName1" defaultValue="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyRelation1">Relationship</Label>
                      <Input id="emergencyRelation1" defaultValue="Spouse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone1">Phone Number</Label>
                    <Input id="emergencyPhone1" defaultValue="+1 234 567 8901" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName2">Contact Name</Label>
                      <Input id="emergencyName2" defaultValue="Robert Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyRelation2">Relationship</Label>
                      <Input id="emergencyRelation2" defaultValue="Son" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone2">Phone Number</Label>
                    <Input id="emergencyPhone2" defaultValue="+1 234 567 8902" />
                  </div>
                </div>
                
                <Button onClick={handleSaveEmergency}>
                  <Save className="h-4 w-4 mr-2" /> Save Contacts
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Medical Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Uploaded Documents</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between bg-background p-2 rounded">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-health-blue" />
                          <span>Medical_Report_2023.pdf</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </li>
                      <li className="flex items-center justify-between bg-background p-2 rounded">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-health-blue" />
                          <span>Blood_Test_Results.pdf</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </li>
                      <li className="flex items-center justify-between bg-background p-2 rounded">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-health-blue" />
                          <span>Prescription.pdf</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Label htmlFor="documentUpload" className="block mb-2">Upload New Document</Label>
                    <div className="flex items-center space-x-2">
                      <Input 
                        id="documentUpload" 
                        type="file" 
                        className="w-full" 
                        onChange={handleUploadDocument} 
                      />
                      <Button>
                        <Upload className="h-4 w-4 mr-2" /> Upload
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Supported formats: PDF, JPG, PNG (max 10MB)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
