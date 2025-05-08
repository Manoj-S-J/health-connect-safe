
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Shield, Heart, Clock, AlertTriangle, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-health-bg">
      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-8">
              <div className="flex items-center mb-6">
                <Activity className="h-10 w-10 text-health-blue" />
                <span className="ml-2 text-3xl font-bold text-health-blue">Health Guard</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Your Health Monitoring Companion
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Real-time health monitoring with advanced alert system. Keep track of your vitals 
                and ensure immediate assistance when needed.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRoLHRlY2h8fHx8fHwxNjg0MTQzMjc2&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Health monitoring illustration" 
                className="rounded-lg shadow-xl w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive health monitoring for your peace of mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Heart className="h-7 w-7 text-health-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vital Monitoring</h3>
                <p className="text-gray-600">
                  Track heart rate, blood pressure, temperature and oxygen levels in real-time with smartwatch connectivity.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-green-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <AlertTriangle className="h-7 w-7 text-health-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Emergency Alerts</h3>
                <p className="text-gray-600">
                  Automatic alerts to registered guardians and emergency services when abnormal vitals are detected.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-purple-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Medical Records</h3>
                <p className="text-gray-600">
                  Securely store and access your medical information for quick reference in emergencies.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-yellow-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Clock className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Monitoring</h3>
                <p className="text-gray-600">
                  Continuous monitoring and analysis of your health data with detailed reports and insights.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-red-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Activity className="h-7 w-7 text-alert-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Health Trends</h3>
                <p className="text-gray-600">
                  Visualize your health data over time to identify patterns and trends for better health management.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <Check className="h-7 w-7 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
                <p className="text-gray-600">
                  Simple and intuitive interface designed for users of all ages with minimal setup required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-health-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to take control of your health monitoring?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who trust Health Guard for their daily health monitoring
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link to="/signup">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-health-blue" />
                <span className="ml-2 text-xl font-bold">Health Guard</span>
              </div>
              <p className="mt-2 text-gray-400 max-w-md">
                Your personal health monitoring solution with advanced features for safety and peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">How it works</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Health Guard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
