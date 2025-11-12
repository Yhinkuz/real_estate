import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

const SimilarProperties = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const category = queryParams.get("category");
  const locationParam = queryParams.get("location");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/properties?category=${category}&location=${locationParam}`
        );
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching similar properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSimilar();
  }, [category, locationParam]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading similar properties...</p>
      </div>
    );

  if (properties.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-600 text-lg mb-4">
          No similar {category} properties found in {locationParam}.
        </p>
        <button
          onClick={() => navigate("/properties")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Listings
        </button>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Similar {category} Properties in {locationParam}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property._id}
            onClick={() => navigate(`/property/${property._id}`)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={property.image || "https://via.placeholder.com/400x250"}
              alt={property.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{property.title}</h2>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-green-600 font-bold">
                ₦{property.price?.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
        >
          ← Back to Property
        </button>
      </div>
    </div>
  );
};

export default SimilarProperties;
