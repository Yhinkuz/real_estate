import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly = false }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    // ❌ Not logged in → send to login page
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !user.isAdmin) {
    // ❌ Logged in but not admin → send to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ User is allowed
  return children;
}

export default ProtectedRoute;
