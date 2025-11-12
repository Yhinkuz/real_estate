// src/pages/HomePage.jsx
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import Banner from "../components/Banner";
import { properties } from "../data/properties"; //  use shared data

function HomePage() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const priceLimit = Number(maxPrice);
    const matchesPrice =
      !maxPrice || isNaN(priceLimit) || property.price <= priceLimit;

    return matchesSearch && matchesPrice;
  });

  return (
    <main>
      {/* 🔥 Banner at the top */}
      <Banner />

      {/* Main Content */}
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Featured Properties
        </h1>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
          <input
            type="text"
            placeholder="Search by title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Max price (₦)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Property List */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No properties match your search.
          </p>
        )}
      </section>
    </main>
  );
}

export default HomePage;
