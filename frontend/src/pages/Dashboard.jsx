import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart, Megaphone, User, Lock } from "lucide-react";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* User Info */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="mb-2">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.isAdmin ? "Admin" : "Regular User"}
        </p>
      </div>

      {/* Dashboard Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/saved"
          className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
        >
          <Heart className="h-12 w-12 text-blue-600 mb-3" />
          <h2 className="font-semibold text-lg">My Saved Property</h2>
          <p className="text-gray-500 text-sm">View property you have saved</p>
        </Link>

        <Link
          to="/requests"
          className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
        >
          <Megaphone className="h-12 w-12 text-blue-600 mb-3" />
          <h2 className="font-semibold text-lg">My Property Requests</h2>
          <p className="text-gray-500 text-sm">
            View property requests you have created
          </p>
        </Link>

        <Link
          to="/profile"
          className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
        >
          <User className="h-12 w-12 text-blue-600 mb-3" />
          <h2 className="font-semibold text-lg">My Profile</h2>
          <p className="text-gray-500 text-sm">
            Phone numbers, email and address
          </p>
        </Link>

        <Link
          to="/change-password"
          className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition md:col-span-3 md:w-1/3 md:mx-auto"
        >
          <Lock className="h-12 w-12 text-blue-600 mb-3" />
          <h2 className="font-semibold text-lg">Change Password</h2>
          <p className="text-gray-500 text-sm">Change your password</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
