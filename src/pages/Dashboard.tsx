import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const Dashboard = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">👋 Welcome, {user?.displayName || 'User'}!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Info */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">📇 Account Info</h2>
            <p className="mb-2"><strong>Full Name:</strong> {user?.displayName || 'N/A'}</p>
            <p className="mb-2"><strong>Email:</strong> {user?.email}</p>
            <p><strong>Phone Number:</strong> {user?.phoneNumber || 'N/A'}</p>
          </div>

          {/* Stats */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">📊 Stats</h2>
            <p><strong>Reviews Submitted:</strong> 0 (Coming Soon)</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
