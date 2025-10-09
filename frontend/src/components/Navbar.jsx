import { Link, useNavigate } from "react-router-dom";

function Navbar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex gap-6 font-semibold">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>

      <div className="flex gap-4 items-center">
        {currentUser ? (
          <>
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
            <Link to="/register" className="hover:text-yellow-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
