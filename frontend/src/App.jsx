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
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";
import SimilarProperties from "./pages/SimilarProperties";
import SavedProperties from "./pages/SavedProperties";
import MyRequests from "./pages/MyRequests";

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
      {/*  Navbar */}
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      {/*  Main Content */}
      <main className="flex-grow p-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard user={currentUser} />
              </ProtectedRoute>
            }
          />

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

          <Route
            path="/change-password"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />

          {/* Admin-Only Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/user/:id"
            element={
              <ProtectedRoute adminOnly>
                <AdminUserProfile />
              </ProtectedRoute>
            }
          />

          {/* Property-Related Routes */}
          <Route
            path="/property/:id"
            element={
              <ProtectedRoute>
                <PropertyDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/similar-properties"
            element={
              <ProtectedRoute>
                <SimilarProperties />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved"
            element={
              <ProtectedRoute>
                <SavedProperties />
              </ProtectedRoute>
            }
          />

          {/*  Fixed — My Property Requests now inside <Routes> */}
          <Route
            path="/requests"
            element={
              <ProtectedRoute>
                <MyRequests />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/*  Footer */}
      <Footer />
    </div>
  );
}

export default App;
