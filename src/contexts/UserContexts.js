import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzie-hub:token");
      const userID = localStorage.getItem("@kenzie-hub:userID");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/users/${userID}`);

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const singIn = async (data) => {
    const response = await api.post("/sessions", data).catch((err) => {
      localStorage.clear();
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });

    const { user: userResponse, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(userResponse);

    localStorage.setItem("@kenzie-hub:token", token);
    localStorage.setItem("@kenzie-hub:userID", userResponse.id);

    const toNavigate = location.state?.from?.pathname || "/dashboard";

    navigate(toNavigate, { replace: true });
  };

  const singUp = async (data) => {
    await api
      .post("/users", data)
      .then(() => {
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);

        toast.success("Email criado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <UserContext.Provider value={{ singIn, singUp, logout, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
