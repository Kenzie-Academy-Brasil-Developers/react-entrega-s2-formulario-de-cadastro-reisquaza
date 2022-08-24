import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { Container, ContainerHeader } from "../../styles/container";
import { Header, Tech } from "./style";
import { GoPlus } from "react-icons/go";
import { ModalContext } from "../../contexts/ModalContexts";
import Nav from "../../components/Nav";
import ModalCreateTech from "../../components/ModalCreateTech";
import ModalEditTech from "../../components/ModalEditTech";
import TechList from "../../components/TechList/TechList";

interface iUserTech {
  id: string;
  title: string;
  status: string;
}

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { isCreateTech, setIsCreateTech } = useContext(ModalContext);
  const { isEditTech, setIsEditTech } = useContext(ModalContext);
  const [editID, setEditID] = useState<string>('');
  const [editTitle, setEditTitle] = useState<string>('');
 
  const userTechs = user.techs;
  
  const editTech = (id: string, title: string) => {
    setIsEditTech(!isEditTech);
    setEditID(id);
    setEditTitle(title);
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

        {isEditTech && <ModalEditTech editID={editID} editTitle={editTitle} />}

        <TechList>
          {userTechs.map(({ id, title, status }: iUserTech) => {
            return (
              <button key={id} onClick={() => editTech(id, title)}>
                <h3>{title}</h3>
                <p>{status}</p>
              </button>
            );
          })}
        </TechList>
      </Container>
    </>
  );
};

export default Dashboard;
