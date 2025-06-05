
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'WhatsApp phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'OTP/Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP verification (for demo, accept "123456" as valid OTP)
    setTimeout(() => {
      setIsLoading(false);
      
      if (formData.password === '123456') {
        toast({
          title: "Login Successful!",
          description: "Welcome back to Uplaud.",
        });
        // Redirect to dashboard (for now, redirect to home)
        navigate('/');
      } else {
        setErrors({ password: 'Invalid OTP. Please try "123456" for demo.' });
      }
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6214a8] to-[#4c0e7a] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0">
          <CardHeader className="space-y-1 text-center pb-6">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/ba7f1f54-2df2-4f44-8af1-522b7ccc0810.png" 
                alt="Uplaud Logo" 
                className="h-12 w-auto"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-slate-600">
              Login to your Uplaud account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-slate-700 font-medium">
                  WhatsApp Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className={`${errors.phoneNumber ? 'border-red-500' : 'border-slate-300'} focus:border-[#6214a8]`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-medium">
                  OTP / Verification Code
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter OTP (use 123456 for demo)"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`${errors.password ? 'border-red-500' : 'border-slate-300'} focus:border-[#6214a8]`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
                <p className="text-xs text-slate-500">
                  For demo purposes, use "123456" as the OTP
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#6214a8] hover:bg-[#4c0e7a] text-white font-medium py-2.5 mt-6"
              >
                {isLoading ? 'Verifying...' : 'Login'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  className="text-[#6214a8] hover:text-[#4c0e7a] font-medium"
                >
                  Register here
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <button className="text-[#6214a8] hover:text-[#4c0e7a] text-sm font-medium">
                Resend OTP
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
