import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import toastifySettings from "../components/toastifySettings";
import api from "../services/api";
import { ModalContext } from "./ModalContexts";

export const TechsContext = createContext({});

const TechsProvider = ({ children }) => {
  const { setIsEditTech, setIsCreateTech } = useContext(ModalContext);

  const createTech = (data) => {
    api
      .post("/users/techs", data)
      .then(() => {
        setIsCreateTech(false);
        toast.success("Tecnologia criada com sucesso!", toastifySettings);
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastifySettings);
      });
  };

  const deleteTech = (techID) => {
    api.delete(`/users/techs/${techID}`).then(() => {
      setIsEditTech(false);
      toast.success("Tecnologia deletada com sucesso!", toastifySettings);
    });
  };

  const editTech = (data, techID) => {
    api
      .put(`/users/techs/${techID}`, data)
      .then(() => {
        setIsEditTech(false);
        toast.success("Tecnologia editada com sucesso!", toastifySettings);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TechsContext.Provider value={{ createTech, deleteTech, editTech }}>
      {children}
    </TechsContext.Provider>
  );
};

export default TechsProvider;
