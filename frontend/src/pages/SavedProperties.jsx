import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

function SavedProperties() {
  const [savedProperties, setSavedProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    const saved = properties.filter(p => savedIds.includes(p.id));
    setSavedProperties(saved);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition mb-6"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold mb-6">Saved Properties ❤️</h1>

      {savedProperties.length === 0 ? (
        <p className="text-gray-600">
          You haven't saved any properties yet. Go explore and save some!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedProperties;