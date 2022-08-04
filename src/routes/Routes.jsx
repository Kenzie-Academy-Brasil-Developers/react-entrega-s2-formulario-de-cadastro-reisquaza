import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const RoutesMain = () => {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState("");

  const token = window.localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  // useEffect(() => {
  // if (!token) {
  //   setAuthorized(false);
  // }
  //   if (!authorized) {
  //     navigate("/login");
  //   } else {
  //     navigate("/dashboard", { replace: true });
  //   }
  // });

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            setAuthorized={setAuthorized}
            setUser={setUser}
            navigate={navigate}
          />
        }
      />
      <Route path="/register" element={<Register navigate={navigate} />} />
      <Route
        path="/dashboard"
        element={<Dashboard setAuthorized={setAuthorized} />}
      />
      <Route path="*" element={<Navigate replace to={"login"} />} />
    </Routes>
  );
};

export default RoutesMain;
