import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/user";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../../services/api";

const Register = ({ navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  console.log(errors);
  const onSubmit = (data) => {
    api
      .post(`/users`, data)
      .then(() => {
        toast.success("Usuario criaado com sucesso!");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2500);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <h3>Nome</h3>
          <input id="name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </label>
        <label htmlFor="email">
          <h3>Email</h3>
          <input id="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </label>
        <label htmlFor="password">
          <h3>Senha</h3>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </label>
        <label htmlFor="passwordConfirm">
          <h3>Confirmar senha</h3>
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p>
        </label>
        <label htmlFor="bio">
          <h3>Bio</h3>
          <input id="bio" {...register("bio")} />
          <p>{errors.bio?.message}</p>
        </label>
        <label htmlFor="contact">
          <h3>Contato</h3>
          <input id="contact" {...register("contact")} />
          <p>{errors.contact?.message}</p>
        </label>
        <label htmlFor="course_module">
          <h3>Selecionar modulo</h3>
          <input id="course_module" {...register("course_module")} />
          <p>{errors.course_module?.message}</p>
        </label>
        <p>
          ja possui uma conta? <Link to={"/login"}>Entrar</Link>
        </p>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default Register;
