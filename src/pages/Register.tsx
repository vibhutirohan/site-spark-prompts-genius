import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [error, setError] = useState('');

  const handleInput = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, password, phoneNumber } = formData;

    if (!phoneNumber.match(/^\+?\d{10,}$/)) {
      setError("Please enter a valid WhatsApp number with country code");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: fullName });
      // Optional: Save phoneNumber to Firestore or database if needed
      navigate('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 px-4">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl max-w-md w-full border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Your Uplaud Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.fullName}
            onChange={(e) => handleInput('fullName', e.target.value)}
          />

          <input
            type="text"
            placeholder="WhatsApp Phone Number"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.phoneNumber}
            onChange={(e) => handleInput('phoneNumber', e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.email}
            onChange={(e) => handleInput('email', e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={formData.password}
            onChange={(e) => handleInput('password', e.target.value)}
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-white/80 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-300 hover:underline">
              Login here
            </Link>
          </p>
          <p className="mt-2 text-sm">
            <Link to="/" className="text-white/70 hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
