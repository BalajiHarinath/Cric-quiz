import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export const RequireAuth = () => {
  const { authData } = useAuth();
  const userId = authData._id;

  return userId ? <Outlet /> : <Navigate to="/login" />;
};
