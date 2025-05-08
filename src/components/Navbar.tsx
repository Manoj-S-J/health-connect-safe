
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Activity, Bell, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Activity className="h-8 w-8 text-health-blue" />
              <span className="ml-2 text-xl font-bold text-health-blue">Health Guard</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to="/settings">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
