import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-lg font-bold">{property.title}</h3>
      <p className="text-gray-600">{property.details}</p>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-600 font-semibold">
        ₦{property.price.toLocaleString()}
      </p>
      <Link
        to={`/property/${property.id}`}
        className="text-sm text-white bg-green-600 px-3 py-1 rounded mt-2 inline-block hover:bg-green-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default PropertyCard;
