import { ContainerNav } from "../../styles/container";
import NavMain from "./style";

const Nav = ({ logout }) => {
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
