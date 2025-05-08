
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Shield, Heart, Bell, FileText, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-health-bg">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-health-blue" />
              <span className="ml-2 text-xl font-bold text-health-blue">Health Guard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-health-blue hover:text-health-blue/80">
                Log in
              </Link>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Your Personal <span className="text-health-blue">Health Guardian</span> Always On Alert
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl">
                Monitor your vital signs in real-time, store important medical information, and get emergency help when you need it most.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-health-blue hover:bg-health-blue/90">
                  <Link to="/signup">
                    Get Started <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">
                    Log In
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-health-blue/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://placehold.co/600x400/1E88E5/FFFFFF?text=Health+Guard" 
                  alt="Health Monitoring App" 
                  className="relative z-10 rounded-lg shadow-xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Health Guard provides everything you need to monitor your health and stay safe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-health-bg p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-health-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Real-time Vital Monitoring</h3>
              <p className="text-gray-600">
                Connect your smartwatch via Bluetooth and monitor your heart rate, blood pressure, 
                temperature, and oxygen levels in real-time.
              </p>
            </div>
            
            <div className="bg-health-bg p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-health-green mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Response System</h3>
              <p className="text-gray-600">
                Automatic alerts to your guardians when critical readings are detected, with 
                escalation to emergency services if needed.
              </p>
            </div>
            
            <div className="bg-health-bg p-6 rounded-lg shadow-md">
              <FileText className="h-12 w-12 text-health-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Medical Information Storage</h3>
              <p className="text-gray-600">
                Securely store your medical history, allergies, medications, and emergency contacts 
                for quick access when needed.
              </p>
            </div>
            
            <div className="bg-health-bg p-6 rounded-lg shadow-md">
              <Bell className="h-12 w-12 text-alert-red mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Intelligent Alerts</h3>
              <p className="text-gray-600">
                Receive notifications when your vital signs are outside normal ranges, with 
                personalized thresholds based on your medical history.
              </p>
            </div>
            
            <div className="bg-health-bg p-6 rounded-lg shadow-md">
              <Activity className="h-12 w-12 text-health-green mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Health Trends Analysis</h3>
              <p className="text-gray-600">
                Track your vital signs over time and identify patterns or changes that might 
                require medical attention.
              </p>
            </div>
            
            <div className="bg-health-bg p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-health-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure and Private</h3>
              <p className="text-gray-600">
                Your health data is encrypted and securely stored, accessible only by you and 
                those you authorize.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-health-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up for Health Guard today and experience peace of mind knowing your health 
            is being monitored 24/7.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-white text-health-blue hover:bg-gray-100">
            <Link to="/signup">
              Get Started Now <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-health-blue" />
                <span className="ml-2 text-xl font-bold">Health Guard</span>
              </div>
              <p className="mt-4 max-w-xs text-gray-400">
                Your personal health monitoring and emergency response system.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Twitter</a></li>
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Health Guard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
