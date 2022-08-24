import { Route, Routes, useNavigate, Navigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import Public from "../components/Public/Public";

const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route element={<Public />}>
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/register" element={<Register/>} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      <Route path="*" element={<Navigate replace to={"login"} />} />
    </Routes>
  );
};

export default RoutesMain;
