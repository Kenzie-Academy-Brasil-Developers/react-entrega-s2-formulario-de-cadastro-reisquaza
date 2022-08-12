import { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [isEditTech, setIsEditTech] = useState(false);
  const [isCreateTech, setIsCreateTech] = useState(false);

  return (
    <ModalContext.Provider
      value={{ isEditTech, setIsEditTech, isCreateTech, setIsCreateTech }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
