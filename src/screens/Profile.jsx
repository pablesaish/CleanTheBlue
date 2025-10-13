import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-cyan-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center border border-cyan-200">
        <h1 className="text-3xl font-bold text-sky-700 mb-4">Welcome, {user.name} 👋</h1>
        <p className="text-gray-600 mb-6">
          Email: <span className="font-medium">{user.email}</span>
        </p>

        <button
          onClick={handleLogout}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
