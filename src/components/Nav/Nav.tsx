import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { ContainerNav } from "../../styles/container";
import NavMain from "./style";

const Nav = () => {
  const { logout } = useContext(UserContext);

  return (
    <NavMain>
      <ContainerNav>
        <h1>Kenzie Hub</h1>
        <button onClick={() => logout()}>Sair</button>
      </ContainerNav>
    </NavMain>
  );
};

export default Nav;
