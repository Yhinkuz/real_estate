import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import PropertyDetails from "./pages/PropertyDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword from "./pages/ChangePassword";
import AdminUserProfile from "./pages/AdminUserProfile";

// ⬇️ Import your new pages
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard user={currentUser} />
              </ProtectedRoute>
            }
          />

          {/* ⬇️ Add these */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/update"
            element={
              <ProtectedRoute>
                <ProfileUpdate />
              </ProtectedRoute>
            }
          />

          <Route path="/change-password" element={<ChangePassword />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/user/:id"
            element={
              <ProtectedRoute adminOnly>
                <AdminUserProfile />
              </ProtectedRoute>
          }
          />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
