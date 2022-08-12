import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechsContext = createContext({});

const TechsProvider = ({ children }) => {
  const createTech = (data) => {
    const response = api.post("/users/techs", data).then(
      toast.success("Tecnologia criada com sucesso!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );

    // console.log("Data", data);
    // console.log("create Response", response);
  };

  const deleteTech = (techID) => {
    const response = api.delete(`/users/techs/${techID}`).then(
      toast.success("Tecnologia deletada com sucesso!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );

    // console.log("delete response", response);
  };

  return (
    <TechsContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechsContext.Provider>
  );
};

export default TechsProvider;