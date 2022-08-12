import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { Container, ContainerHeader } from "../../styles/container";
import { Header, Tech } from "./style";
import { TechsContext } from "../../contexts/TechsContexts";
import { VscTrash } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import Nav from "../../components/Nav";
import ModalCreateTech from "../../components/ModalCreateTech";
import ModalEditTech from "../../components/ModalEditTech";
import TechList from "../../components/TechList/TechList";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { deleteTech } = useContext(TechsContext);
  const [isCreateTech, setIsCreateTech] = useState(false);
  const [isEditTech, setIsEditTech] = useState();

  const userTechs = user.techs;

  return (
    <>
      <button onClick={() => setIsEditTech(!isEditTech)}>teste</button>
      <Nav />
      <Header>
        <ContainerHeader>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </ContainerHeader>
      </Header>
      <Container>
        <Tech>
          <h3>Tecnologias</h3>
          <button onClick={() => setIsCreateTech(!isCreateTech)}>
            <GoPlus />
          </button>
        </Tech>

        {isCreateTech && <ModalCreateTech setIsCreateTech={setIsCreateTech} />}
        
        {isEditTech && <ModalEditTech setIsEditTech={setIsEditTech} />}

        <TechList>
          {userTechs.map(({ id, title, status }) => {
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p>{status}</p>
                <button onClick={() => setIsEditTech(!isEditTech)}>
                  editar
                </button>
                <button onClick={() => deleteTech(id)}>
                  <VscTrash />
                </button>
              </li>
            );
          })}
        </TechList>
      </Container>
    </>
  );
};

export default Dashboard;
