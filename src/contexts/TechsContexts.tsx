import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../components/toastifySettings";
import api from "../services/api";
import { ModalContext } from "./ModalContexts";

interface iTechsProvider {
  children: ReactNode;
}

interface iData {
  title: string;
  status: string;
}

interface iTechID {
  techID: string;
}

export const TechsContext = createContext({});

const TechsProvider = ({ children }: iTechsProvider) => {
  const { setIsEditTech, setIsCreateTech } = useContext(ModalContext);

  const createTech = (data: iData) => {
    api
      .post("/users/techs", data)
      .then(() => {
        setIsCreateTech(false);
        toastSuccess();
      })
      .catch((err) => {
        toastError(err.response.data.message);
      });
  };

  const deleteTech = (techID: iTechID) => {
    api.delete(`/users/techs/${techID}`).then(() => {
      setIsEditTech(false);
      toast.success("Tecnologia deletada com sucesso!", {
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

  const editTech = (data: iData, techID: iTechID) => {
    api
      .put(`/users/techs/${techID}`, data)
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
