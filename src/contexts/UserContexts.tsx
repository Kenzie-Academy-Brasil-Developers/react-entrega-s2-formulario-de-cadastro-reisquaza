import { HeadersDefaults } from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContext {
  singIn: (data: iData) => void;
  singUp: (data: iData) => void;
  logout: () => void;
  user: null;
  loading: boolean;
}

interface iHeadersDefault extends HeadersDefaults {
  Authorization: string;
}

export interface iData {
  // id: string;
  email: string;
  password: string;
  name?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
}

interface iLocationState {
  from: {
    pathname: string;
  };
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProvider) => {
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
          api.defaults.headers = {
            Authorization: `Bearer ${token}`,
          } as iHeadersDefault;

          const { data } = await api.get(`/users/${userID}`);

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [user]);

  const singIn = async (data: iData) => {
    const response = await api
      .post("/sessions", data)
      .then((res) => res.data)
      .catch((err) => {
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

    const { user: userResponse, token } = response;

    setUser(userResponse);

    localStorage.setItem("@kenzie-hub:token", token);
    localStorage.setItem("@kenzie-hub:userID", userResponse.id);

    const { from } = location.state as iLocationState;

    const toNavigate = from?.pathname || "/dashboard";

    navigate(toNavigate, { replace: true });
  };

  const singUp = async (data: iData) => {
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
