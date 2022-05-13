import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export const RestrictAuth = () => {
  const { authData } = useAuth();
  const userId = authData._id;

  return userId ? <Navigate to="/" replace /> : <Outlet />;
};
