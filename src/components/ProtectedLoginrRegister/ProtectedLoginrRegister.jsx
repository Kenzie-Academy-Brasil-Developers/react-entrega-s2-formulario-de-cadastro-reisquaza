import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";

const ProtectedLoginRegister = () => {
  const { loading } = useContext(UserContext);
  const location = useLocation();

  const token = localStorage.getItem("@kenzie-hub:token");
  const toNavigate = location.state?.from?.pathname || "/dashboard";

  if (loading) {
    return <> </>;
  }

  return token ? (
    <Navigate to={toNavigate} replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default ProtectedLoginRegister;
