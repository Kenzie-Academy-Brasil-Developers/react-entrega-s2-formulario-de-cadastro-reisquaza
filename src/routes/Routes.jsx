import { Route, Routes, useNavigate, Navigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import ProtectedLoginRegister from "../components/ProtectedLoginrRegister/ProtectedLoginrRegister";

const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route element={<ProtectedLoginRegister />}>
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/register" element={<Register navigate={navigate} />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard navigate={navigate} />} />
      </Route>
      <Route path="*" element={<Navigate replace to={"login"} />} />
    </Routes>
  );
};

export default RoutesMain;
