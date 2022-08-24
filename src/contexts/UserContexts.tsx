import { HeadersDefaults } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../components/toastifySettings";
import api from "../services/api";

interface iUserProvider {
  children: React.ReactNode;
}

interface iUserContext {
  singIn: (data: iData) => void;
  singUp: (data: iData) => void;
  logout: () => void;
  user: iData;
  loading: boolean;
}

interface iHeadersDefault extends HeadersDefaults {
  Authorization: string;
}

export interface iData {
  id: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  passwordConfirm?: string;
  techs: [];
}

export interface iLocationState {
  from: {
    pathname: string;
  };
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iData>({} as iData);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
  }, []);

  const singIn = async (data: iData) => {
    const response = await api
      .post("/sessions", data)
      .then((res) => res.data)
      .catch((err) => {
        localStorage.clear();
        toastError(err.response.data.message);
      });

    const { user: userResponse, token } = response;

    setUser(userResponse);

    localStorage.setItem("@kenzie-hub:token", token);
    localStorage.setItem("@kenzie-hub:userID", userResponse.id);
  };

  const singUp = async (data: iData) => {
    await api
      .post("/users", data)
      .then(() => {
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
        toastSuccess("Email criado com sucesso!");
      })
      .catch((err) => {
        toastError(err.response.data.message);
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
