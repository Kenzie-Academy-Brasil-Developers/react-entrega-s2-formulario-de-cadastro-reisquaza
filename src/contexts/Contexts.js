import ModalProvider from "./ModalContexts";
import TechsProvider from "./TechsContexts";
import UserProvider from "./UserContexts";

const Contexts = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <TechsProvider>{children}</TechsProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Contexts;
