import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          My Profile
        </h2>

        {user ? (
          <div className="space-y-3">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.isAdmin ? "Admin" : "Regular User"}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Dashboard
        </button>

        <button
  onClick={() => navigate("/profile/update")}
  className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
>
  Edit Profile
</button>

      </div>
    </div>
  );
}

export default Profile;
