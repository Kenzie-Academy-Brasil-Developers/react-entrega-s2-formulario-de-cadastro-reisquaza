import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user.id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
