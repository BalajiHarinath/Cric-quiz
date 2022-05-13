import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export const RestrictAuth = () => {
  const { authData } = useAuth();
  const userId = authData._id;
  const location = useLocation();
  console.log(location?.state);
  console.log(location?.state?.from?.pathname);
  return userId ? (
    <Navigate
      to={`${
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
};
