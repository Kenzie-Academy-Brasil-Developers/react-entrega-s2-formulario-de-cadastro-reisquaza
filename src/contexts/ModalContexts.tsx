import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface iModalProvider {
  children: ReactNode;
}

interface iModalContext {
  isEditTech: boolean;
  isCreateTech: boolean;
  setIsEditTech: Dispatch<SetStateAction<boolean>>
  setIsCreateTech: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalProvider) => {
  const [isEditTech, setIsEditTech] = useState<boolean>(false);
  const [isCreateTech, setIsCreateTech] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ isEditTech, setIsEditTech, isCreateTech, setIsCreateTech }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
