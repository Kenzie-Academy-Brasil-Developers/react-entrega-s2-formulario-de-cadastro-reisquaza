import { useContext, useEffect } from "react";
import Nav from "../../components/Nav";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";
import { Container, ContainerHeader } from "../../styles/container";
import { Header } from "./style";

const Dashboard = ({ navigate }) => {
  const { user } = useContext(UserContext);

  const logout = () => {
    window.localStorage.clear();
    navigate("/login", { replace: true });
  };

  const tste = (e) => {
    console.log(user);
    const tchs = user.techs;

    console.log(tchs);
  };

  return (
    <>
      <button onClick={tste}>aaaaaa</button>
      <Nav logout={logout} />
      <Header>
        <ContainerHeader>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </ContainerHeader>
      </Header>
      <Container>
        <div>
          <h3>Tecnologias</h3>
          <button>+</button>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
