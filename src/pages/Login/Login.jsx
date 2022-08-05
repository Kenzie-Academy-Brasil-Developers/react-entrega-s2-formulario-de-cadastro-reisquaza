import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/user";
import api from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import { ContainerForm } from "../../styles/container";
import { Button, ButtonGray } from "../../components/Button";
import { Form } from "../../components/Form";

const Login = ({ setAuthorized, setUser, navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    api
      .post(`/sessions`, data)
      .then((res) => {
        window.localStorage.clear();

        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);

        setAuthorized(true);
        setUser(res.data.user);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        // toast.error(err.response.data.message);
        toast.error("Email ou senha inválidos", {
          style: {
            background: "var(--color-gray-3)",
            color: "var(--color-gray-0)",
            width: "20%",
            height: "60px",
          },
        });
      });
  };

  return (
    <ContainerForm>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Kenzie Hub</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        onError={() => toast.error("erro")}
      >
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
