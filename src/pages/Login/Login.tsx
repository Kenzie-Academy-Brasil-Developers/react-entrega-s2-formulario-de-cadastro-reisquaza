import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/user";
import { ContainerForm } from "../../styles/container";
import { Button, ButtonGray } from "../../components/Button";
import { Form } from "../../components/Form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import "react-toastify/dist/ReactToastify.css";
import { iData } from "../../contexts/UserContexts";

const Login = ({ navigate }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({
    resolver: yupResolver(loginSchema),
  });

  const { singIn } = useContext(UserContext);

  return (
    <ContainerForm>
      <h1>Kenzie Hub</h1>
      <Form onSubmit={handleSubmit(singIn)}>
        <h3>Login</h3>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" id="email" {...register("email")} />
          <h4>{errors.email?.message}</h4>
        </label>
        <label htmlFor="password">
          <p>Senha</p>
          <input type="password" id="password" {...register("password")} />
          <h4>{errors.password?.message}</h4>
        </label>
        <Button type="submit">Login</Button>
        <div>
          <p> Ainda não possui uma conta?</p>
          <ButtonGray onClick={() => navigate("/register", { replace: true })}>
            Cadastre-se
          </ButtonGray>
        </div>
      </Form>
    </ContainerForm>
  );
};

export default Login;
