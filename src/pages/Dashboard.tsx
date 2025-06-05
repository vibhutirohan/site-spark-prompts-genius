
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your Uplaud account.",
    });
    navigate('/');
  };

  // Placeholder data (in a real app, this would come from authentication state/API)
  const userData = {
    name: "John Doe",
    phoneNumber: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    reviewsSubmitted: 12
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6214a8] to-[#4c0e7a] px-4 py-8">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              My Dashboard
            </h1>
            <p className="text-xl text-[#5EEAD4]">
              Welcome back, {userData.name}!
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-[#5EEAD4] text-[#5EEAD4] hover:bg-[#5EEAD4]/10 flex items-center gap-2"
          >
            <LogOut size={16} />
            Log Out
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reviews Summary Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 text-lg">
                Reviews Submitted
              </CardTitle>
              <CardDescription className="text-slate-600">
                Your contribution to the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#6214a8] mb-2">
                {userData.reviewsSubmitted}
              </div>
              <p className="text-sm text-slate-600">
                Thank you for helping others make better decisions!
              </p>
            </CardContent>
          </Card>

          {/* Account Info Card */}
          <Card className="shadow-xl border-0 md:col-span-2 lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 text-lg flex items-center gap-2">
                <User size={20} />
                Account Information
              </CardTitle>
              <CardDescription className="text-slate-600">
                Your registered details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">
                    Full Name
                  </label>
                  <p className="text-slate-900 bg-slate-50 p-3 rounded-md">
                    {userData.name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">
                    WhatsApp Phone Number
                  </label>
                  <p className="text-slate-900 bg-slate-50 p-3 rounded-md">
                    {userData.phoneNumber}
                  </p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">
                  Email Address
                </label>
                <p className="text-slate-900 bg-slate-50 p-3 rounded-md">
                  {userData.email || "Not provided"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="shadow-xl border-0 md:col-span-2 lg:col-span-3">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-900 text-lg">
                Quick Actions
              </CardTitle>
              <CardDescription className="text-slate-600">
                Manage your account and reviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="bg-[#6214a8] hover:bg-[#4c0e7a] text-white font-medium">
                  Submit New Review
                </Button>
                <Button variant="outline" className="border-[#6214a8] text-[#6214a8] hover:bg-[#6214a8]/10">
                  View My Reviews
                </Button>
                <Button variant="outline" className="border-[#6214a8] text-[#6214a8] hover:bg-[#6214a8]/10">
                  Edit Profile
                </Button>
                <Button variant="outline" className="border-[#6214a8] text-[#6214a8] hover:bg-[#6214a8]/10">
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
