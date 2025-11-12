import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Admin() {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, propsRes] = await Promise.all([
          api.get("/users"),
          api.get("/properties"),
        ]);
        setUsers(usersRes.data);
        setProperties(propsRes.data);
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading admin panel...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Users Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">All Users ({users.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-4 shadow rounded-lg">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500">
                {user.isAdmin ? "Admin" : "User"}
              </p>
              <Link
                to={`/admin/user/${user._id}`}
                className="text-blue-600 text-sm hover:underline mt-2 inline-block"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Properties Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Properties ({properties.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div key={property._id} className="bg-white p-4 shadow rounded-lg">
              <img
                src={property.image || property.images?.[0] || "https://via.placeholder.com/400"}
                alt={property.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <p className="font-semibold">{property.title}</p>
              <p className="text-sm text-gray-600">{property.location}</p>
              <p className="text-green-600 font-bold">₦{property.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Admin;