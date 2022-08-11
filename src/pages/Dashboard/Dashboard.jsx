import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { UserContext } from "../../contexts/UserContexts";
import { Container, ContainerHeader } from "../../styles/container";
import { Header } from "./style";
import { toast } from "react-toastify";
import { TechsContext } from "../../contexts/TechsContexts";
import Nav from "../../components/Nav";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createTech, deleteTech } = useContext(TechsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userTechs = user.techs;

  const teste = () => {
    console.log("User data", user);
    console.log("list Techs", userTechs);
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
        <button onClick={teste}>aaaaaa</button>
        <div>
          <h3>Tecnologias</h3>
          <button>+</button>
        </div>
        {/* Modal */}
        <div>
          <div>
            <h3>Cadastrar Tecnologias</h3>
            <button>X</button>
          </div>
          <Form onSubmit={handleSubmit(createTech)}>
            <label htmlFor="title">
              <p>Nome</p>
              <input type="text" id="title" {...register("title")} />
              <h4>{errors.title?.message}</h4>
            </label>

            <label htmlFor="status">
              <p>Selecionar status</p>
              <select id="status" {...register("status")}>
                <option value="">Status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Avançado">Avançado</option>
                <option value="Intermediário">Intermediário</option>
              </select>
              <h4>{errors.status?.message}</h4>
            </label>

            <Button>Cadastrar tecnologia</Button>
          </Form>
        </div>

        {/*Lista de tecnologias*/}
        <ul>
          {userTechs.map(({ id, title, status }) => {
            return (
              <li key={id}>
                <p>{title}</p>
                <p>{status}</p>
                {/* <button onClick={() => editTech(id)}>editar</button> */}
                <button onClick={() => deleteTech(id)}>remover</button>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
