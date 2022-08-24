import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../components/toastifySettings";
import api from "../services/api";
import { ModalContext } from "./ModalContexts";

export interface iTechContext {
  createTech: (data: iTech) => void;
  deleteTech: (id: string) => void;
  editTech: (data: object, id: string) => void;
}

interface iTechsProvider {
  children: ReactNode;
}

export interface iTech {
  id: string;
  title: string;
  status: string;
}

export const TechsContext = createContext<iTechContext>({} as iTechContext);

const TechsProvider = ({ children }: iTechsProvider) => {
  const { setIsEditTech, setIsCreateTech } = useContext(ModalContext);

  const createTech = (data: iTech) => {
    api
      .post("/users/techs", data)
      .then(() => {
        setIsCreateTech(false);
        toastSuccess("Tecnologia criada com sucesso!");
      })
      .catch((err) => {
        toastError(err.response.data.message);
      });
  };

  const deleteTech = (id: string) => {
    api.delete(`/users/techs/${id}`).then(() => {
      setIsEditTech(false);
      toastSuccess("Tecnologia deletada com sucesso!");
    });
  };

  const editTech = (data: object, id: string) => {
    api
      .put(`/users/techs/${id}`, data)
      .then(() => {
        setIsEditTech(false);
        toast.success("Tecnologia editada com sucesso!");
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
