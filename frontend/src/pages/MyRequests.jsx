// src/pages/MyRequests.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/requests/my-requests`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRequests(res.data);
      } catch (err) {
        console.error("Error fetching property requests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading your requests...</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/*  Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition mb-6"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold mb-6">My Property Requests 📋</h1>

      {requests.length === 0 ? (
        <p className="text-gray-600">
          You haven’t made any property requests yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{req.title}</h2>
              <p className="text-gray-600 mb-2">{req.location}</p>
              <p className="text-green-600 font-bold mb-2">
                Budget: ₦{req.budget?.toLocaleString()}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                {req.description || "No description provided."}
              </p>
              <p className="text-xs text-gray-400">
                Requested on {new Date(req.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
