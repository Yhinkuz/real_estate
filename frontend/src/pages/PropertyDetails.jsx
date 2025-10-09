import { useParams, Link } from "react-router-dom";
import FourBedroomImg from "../assets/4BedroomFullyDetachedDuplex.jpeg";
import FourDuplexImg from "../assets/4BedroomsTerracedDuplex.jpeg";
import FullyServicedImg from "../assets/FullyServiced3BedroomApartmentwithgym.jpeg";
import UnfurnishedImg from "../assets/Unfurnished2BedroomTerrace.jpeg";
import FourBedroomRImg from "../assets/fourBedroomRiver.jpeg";
import NineBedroomImg from "../assets/NineBedroomExquisite.jpg";


const properties = [
  {
    id: 1,
    title: "4 Bedroom Fully Detached Duplex",
    details: "For sale 4 bedroom fully detached duplex price: 160m...",
    location: "Ajah, Lagos",
    price: 160000000,
    images: [FourBedroomImg],
    contact: "08183987654",
  },
  {
    id: 2,
    title: "4-Bedroom Luxury Apartment",
    details: "Discover timeless luxury in Maitama, Abuja...",
    location: "Maitama, Abuja",
    price: 6500000,
    images: [FourDuplexImg, NineBedroomImg],
    contact: "08183987655",
  },
  {
    id: 3,
    title: "Unfurnished 2 Bedroom Terrace Duplex",
    details: "2 bedroom terrace duplex at Bodija...",
    location: "Bodija, Ibadan",
    price: 4500000,
    images: [UnfurnishedImg],
    contact: "08183987656",
  },
  {
    id: 4,
    title: "Fully Serviced 3 Bedroom Apartment",
    details: "3 bedroom apartment with gym and pool...",
    location: "Port Harcourt",
    price: 15000000,
    images: [FullyServicedImg],
    contact: "08183987657",
  },
  {
    id: 5,
    title: "4 Bedroom Terraced Duplex",
    details: "Carcass with BQ in Kaura district...",
    location: "Kaura, Abuja",
    price: 150000000,
    images: [FourBedroomRImg],
    contact: "08183987658",
  },
  {
    id: 6,
    title: "9 Bedroom Exquisite Mansion",
    details: "For sale 9 bedroom mansion in Maitama...",
    location: "Maitama, Abuja",
    price: 10000000000,
    images: [NineBedroomImg],
    contact: "08183987659",
  },
];

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <Link to="/" className="text-green-600 mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${property.title} ${index + 1}`}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Description: </strong>{property.details}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {property.location}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Contact:</strong> {property.contact}
      </p>
      <p className="text-blue-600 font-semibold text-xl">
        ₦{property.price.toLocaleString()}
      </p>

      <Link
        to="/"
        className="mt-4 inline-block text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PropertyDetails;
