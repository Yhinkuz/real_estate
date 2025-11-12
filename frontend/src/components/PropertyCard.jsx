import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  // Consistent image source resolution
  const imageSrc = property.images?.[0] || property.image || "https://via.placeholder.com/600x400";

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <img
        src={imageSrc}
        alt={property.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h3 className="text-lg font-bold mt-2">{property.title}</h3>
      <p className="text-gray-600 text-sm">{property.details}</p>
      <p className="text-gray-600 text-sm">{property.location}</p>
      <p className="text-blue-600 font-semibold mt-2">
        ₦{property.price?.toLocaleString()}
      </p>
      <Link
        to={`/property/${property.id || property._id}`}
        className="text-sm text-white bg-green-600 px-3 py-1 rounded mt-2 inline-block hover:bg-green-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default PropertyCard;