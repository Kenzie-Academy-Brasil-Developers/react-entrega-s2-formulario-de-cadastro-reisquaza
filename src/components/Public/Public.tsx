import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";
import { iLocationState } from "../../contexts/UserContexts";

const Public = () => {
  const { loading } = useContext(UserContext);
  const location = useLocation();

  const token = localStorage.getItem("@kenzie-hub:token");
  // const toNavigate = location.state?.from?.pathname || "/dashboard";

  const fromPathname = () => {
    if (location.state) {
      const { from } = location.state as iLocationState;

      return from.pathname;
    } else {
      return "/dashboard";
    }
  };


  const toNavigate = fromPathname()

  if (loading) {
    return <> </>;
  }

  return token ? (
    <Navigate to={toNavigate} replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default Public;
