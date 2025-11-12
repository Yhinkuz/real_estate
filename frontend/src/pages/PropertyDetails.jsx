import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local data first
    const found = properties.find(p => p.id === parseInt(id));
    
    if (found) {
      setProperty(found);
      setLoading(false);
    } else {
      // If not in local data, you could fetch from API
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-gray-600 text-lg mb-4">Property not found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const imageSrc = property.images?.[0] || property.image || "https://via.placeholder.com/600x400";

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back to Home
      </button>

      <div className="w-full mb-6">
        <img
          src={imageSrc}
          alt={property.title}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-2xl font-semibold text-green-600 mb-4">
        ₦{property.price?.toLocaleString()}
      </p>

      <p className="text-gray-700 mb-6">{property.details}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`tel:${property.contact}`}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 text-center"
        >
          Contact Seller: {property.contact}
        </a>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
        >
          See More Properties
        </button>
      </div>
    </div>
  );
}

export default PropertyDetails;