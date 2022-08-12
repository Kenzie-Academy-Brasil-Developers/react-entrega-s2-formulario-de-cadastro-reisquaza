import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { Container, ContainerHeader } from "../../styles/container";
import { Header, Tech } from "./style";
import { TechsContext } from "../../contexts/TechsContexts";
import { VscTrash } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { ModalContext } from "../../contexts/ModalContexts";
import Nav from "../../components/Nav";
import ModalCreateTech from "../../components/ModalCreateTech";
import ModalEditTech from "../../components/ModalEditTech";
import TechList from "../../components/TechList/TechList";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { deleteTech } = useContext(TechsContext);
  const { isCreateTech, setIsCreateTech } = useContext(ModalContext);
  const { isEditTech, setIsEditTech } = useContext(ModalContext);
  const [techInfo, setTechInfo] = useState();

  const userTechs = user.techs;
  const editTech = (id, title) => {
    const info = {
      id: id,
      title: title,
    };
    setIsEditTech(!isEditTech);
    setTechInfo(info);
  };

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
          <button onClick={() => setIsCreateTech(!isCreateTech)}>
            <GoPlus />
          </button>
        </Tech>

        {isCreateTech && <ModalCreateTech />}

        {isEditTech && <ModalEditTech techInfo={techInfo} />}

        <TechList>
          {userTechs.map(({ id, title, status }) => {
            return (
              <button key={id} onClick={() => editTech(id, title)}>
                <h3>{title}</h3>
                <p>{status}</p>
                {/* <button onClick={() => editTech(id, title)}>editar</button>
                <button onClick={() => deleteTech(id)}>
                  <VscTrash />
                </button> */}
              </button>
            );
          })}
        </TechList>
      </Container>
    </>
  );
};

export default Dashboard;
