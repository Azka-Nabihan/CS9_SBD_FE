import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if(!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login page if not authenticated
    }

    return children; // Render the protected component if authenticated
}