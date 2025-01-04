import { Navigate } from "react-router-dom";
import useAuthStore from "../store/auth-store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "admin" | "employee";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { isAuthenticated, role } = useAuthStore();

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
