import { Navigate } from "react-router-dom";
import useAuthStore from "../store/auth-store";
import { useEffect } from "react";
import Loader from "./Loader";
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "admin" | "employee";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { isAuthenticated, role, loading, hydrate } = useAuthStore();
  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (loading) return <Loader />;
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requiredRole && role !== requiredRole) {
    return (
      <Navigate to={role === "admin" ? "/admin/dashboard" : "/dashboard"} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
