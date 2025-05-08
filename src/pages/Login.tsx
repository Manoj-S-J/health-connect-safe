
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // Simulate authentication (in a real app, this would call an API)
    console.log('Login attempt:', data);
    
    // Simulate successful login
    toast.success('Login successful!');
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-health-bg p-4">
      <div className="flex items-center mb-8">
        <Activity className="h-10 w-10 text-health-blue" />
        <span className="ml-2 text-3xl font-bold text-health-blue">Health Guard</span>
      </div>
      
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Log in to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your health monitoring
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="text-sm text-alert-red">{errors.email.message?.toString()}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-health-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
              />
              {errors.password && (
                <p className="text-sm text-alert-red">{errors.password.message?.toString()}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full" size="lg">
              <LogIn className="h-4 w-4 mr-2" /> Log In
            </Button>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-health-blue hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
