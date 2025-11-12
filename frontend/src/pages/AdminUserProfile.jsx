import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

function AdminUserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get(`/users/${id}`);
        setUser(data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.msg || "Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUser();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading user...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!user) return <p className="text-center mt-10">User not found</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow rounded mt-8">
      <button
        onClick={() => navigate("/admin")}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back to Admin
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-600">User Profile</h2>
      
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
        <p><strong>Address:</strong> {user.address || "N/A"}</p>
        <p><strong>Admin:</strong> {user.isAdmin ? "Yes" : "No"}</p>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default AdminUserProfile;