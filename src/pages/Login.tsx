import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'number' | 'otp'>('number');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsappNumber })
      });

      const data = await res.json();
      if (res.ok) {
        setStep('otp');
        setError('');
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('Server error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ whatsappNumber, otp })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setError('Server error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 px-4">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl max-w-md w-full border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login with WhatsApp</h2>

        {step === 'number' ? (
          <>
            <input
              type="text"
              placeholder="Enter WhatsApp Number (with +91 or +1)"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            <button
              onClick={sendOTP}
              disabled={loading}
              className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold"
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            <button
              onClick={verifyOTP}
              disabled={loading}
              className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
