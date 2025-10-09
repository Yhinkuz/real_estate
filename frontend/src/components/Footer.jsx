import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dream Homes. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
