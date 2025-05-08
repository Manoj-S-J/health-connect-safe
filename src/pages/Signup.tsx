
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    // Simulate account creation (in a real app, this would call an API)
    console.log('Signup attempt:', data);
    
    toast.success('Account created successfully!');
    
    // Redirect to dashboard after signup
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  
  const password = watch("password");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-health-bg p-4">
      <div className="flex items-center mb-8">
        <Activity className="h-10 w-10 text-health-blue" />
        <span className="ml-2 text-3xl font-bold text-health-blue">Health Guard</span>
      </div>
      
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Sign up for Health Guard to monitor your vital signs
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  {...register('firstName', { required: 'First name is required' })} 
                />
                {errors.firstName && (
                  <p className="text-sm text-alert-red">{errors.firstName.message?.toString()}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  {...register('lastName', { required: 'Last name is required' })} 
                />
                {errors.lastName && (
                  <p className="text-sm text-alert-red">{errors.lastName.message?.toString()}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
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
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })} 
              />
              {errors.password && (
                <p className="text-sm text-alert-red">{errors.password.message?.toString()}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })} 
              />
              {errors.confirmPassword && (
                <p className="text-sm text-alert-red">{errors.confirmPassword.message?.toString()}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
              <Input 
                id="emergencyContact" 
                type="tel" 
                {...register('emergencyContact', { 
                  required: 'Emergency contact is required'
                })} 
              />
              {errors.emergencyContact && (
                <p className="text-sm text-alert-red">{errors.emergencyContact.message?.toString()}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full" size="lg">
              <UserPlus className="h-4 w-4 mr-2" /> Sign Up
            </Button>
            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-health-blue hover:underline font-medium">
                Log in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
