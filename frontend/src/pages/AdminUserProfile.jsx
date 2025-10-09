// src/pages/AdminUserProfile.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AdminUserProfile() {
  const { id } = useParams(); // ✅ capture ID from route
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:5000/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.msg || "Failed to fetch user");
          return;
        }

        setUser(data);
      } catch (err) {
        console.error(err);
        setError("Server error");
      }
    };

    if (id) fetchUser(); // Only call if ID exists
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Loading user...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-blue-600">User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone || "—"}</p>
      <p><strong>Address:</strong> {user.address || "—"}</p>
      <p><strong>Admin:</strong> {user.isAdmin ? "Yes" : "No"}</p>
    </div>
  );
}

export default AdminUserProfile;
