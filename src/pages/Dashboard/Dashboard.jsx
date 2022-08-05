import { useEffect } from "react";
import Nav from "../../components/Nav";
import { Container, ContainerHeader } from "../../styles/container";
import { Header } from "./style";

const Dashboard = ({ setAuthorized, user, navigate, token }) => {
  const logout = () => {
    window.localStorage.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return (
    <>
      <Nav logout={logout} />
      <Header>
        <ContainerHeader>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </ContainerHeader>
      </Header>
      <Container>
        <div>
          <h2>Que pena! Estamos em desenvolvimento</h2>
          <h3>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h3>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
