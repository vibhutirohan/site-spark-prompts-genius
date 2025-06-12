// src/pages/Login.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/sonner";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!phone) return toast.error("Please enter your WhatsApp number");

    setLoading(true);
    try {
      const res = await fetch("https://glorious-carnival-677wx9rq45rf5r44-5000.app.github.dev/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ whatsappNumber: phone }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("OTP sent via WhatsApp (TextBelt)");
        setShowOtpField(true);
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) return toast.error("Please enter the OTP");

    setLoading(true);
    try {
      const res = await fetch("https://glorious-carnival-677wx9rq45rf5r44-5000.app.github.dev/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ whatsappNumber: phone, otp }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Login successful!");
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error("Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
      <Toaster />
      <Card className="w-full max-w-md shadow-2xl bg-white/80 backdrop-blur-md rounded-2xl border border-green-300">
        <CardContent className="space-y-6 p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-800">Uplaud Login</h1>
            <p className="text-sm text-green-700 mt-1">Use your WhatsApp number</p>
          </div>

          <Input
            type="text"
            placeholder="Enter WhatsApp Number (e.g., +1XXXXXXXXXX)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {showOtpField && (
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}

          <Button
            onClick={showOtpField ? verifyOtp : sendOtp}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
          >
            {loading ? "Processing..." : showOtpField ? "Verify OTP" : "Send OTP"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
