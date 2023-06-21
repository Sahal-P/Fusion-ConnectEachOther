import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth.value);

  if (!auth) {
    return <Navigate to={"auth/login"} />;
  }
  return <Outlet />;
};
