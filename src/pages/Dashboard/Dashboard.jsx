import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { Container, ContainerHeader } from "../../styles/container";
import { Header, Tech } from "./style";
import { TechsContext } from "../../contexts/TechsContexts";
import { VscTrash } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import Nav from "../../components/Nav";
import ModalCreateTech from "../../components/ModalCreateTech";
import TechList from "../../components/TechList/TechList";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { deleteTech } = useContext(TechsContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const userTechs = user.techs;

  return (
    <>
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
          <button onClick={() => setIsOpenModal(!isOpenModal)}>
            <GoPlus />
          </button>
        </Tech>

        {isOpenModal && <ModalCreateTech setIsOpenModal={setIsOpenModal} />}

        <TechList>
          {userTechs.map(({ id, title, status }) => {
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p>{status}</p>
                {/* <button onClick={() => editTech(id)}>editar</button> */}
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
