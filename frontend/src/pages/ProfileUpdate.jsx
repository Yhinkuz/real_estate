// src/pages/ProfileUpdate.jsx
import { useState, useEffect } from "react";
import api from "../utils/api"; // axios instance with token

function ProfileUpdate() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [message, setMessage] = useState("");

  // Load user from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setFormData({
        name: savedUser.name || "",
        phone: savedUser.phone || "",
        email: savedUser.email || "",
        address: savedUser.address || "",
      });
    }
  }, []);

  // Handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put("/users/update-profile", formData);
      setMessage("✅ Profile updated successfully");

      // Update localStorage so dashboard shows new data immediately
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update profile");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      {message && <p className="mb-4 text-center">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Home Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileUpdate;
