import { ReactNode } from "react";
import ModalProvider from "./ModalContexts";
import TechsProvider from "./TechsContexts";
import UserProvider from "./UserContexts";

interface iContext {
  children: ReactNode
}


const Contexts = ({ children }: iContext) => {
  return (
    <UserProvider>
      <ModalProvider>
        <TechsProvider>{children}</TechsProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Contexts;
