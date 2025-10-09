// src/components/Banner.jsx
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { properties } from "../data/properties"; // ✅ keep it here so pages stay the same

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {properties.slice(0, 3).map((property) => (
          <div key={property.id} className="relative">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/40">
              <h2 className="text-3xl md:text-5xl font-bold">{property.title}</h2>
              <p className="text-lg md:text-2xl mt-2">{property.details}</p>
              <Link
                to={`/property/${property.id}`}
                className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
