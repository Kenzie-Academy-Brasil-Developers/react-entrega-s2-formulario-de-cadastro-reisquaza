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
          <p>Nome</p>
          <input id="name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input id="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </label>
        <label htmlFor="password">
          <p>Senha</p>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </label>
        <label htmlFor="passwordConfirm">
          <p>Confirmar senha</p>
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p>
        </label>
        <label htmlFor="bio">
          <p>Bio</p>
          <input id="bio" {...register("bio")} />
          <p>{errors.bio?.message}</p>
        </label>
        <label htmlFor="contact">
          <p>Contato</p>
          <input id="contact" {...register("contact")} />
          <p>{errors.contact?.message}</p>
        </label>

        <label htmlFor="course_module">
          <p>Selecionar modulo</p>
          <select id="course_module" {...register("course_module")}>
            <option value="">Modulo</option>
            <option value="M1">Modulo 01</option>
            <option value="M2">Modulo 02</option>
            <option value="M3">Modulo 03</option>
            <option value="M4">Modulo 04</option>
            <option value="M5">Modulo 05</option>
            <option value="M6">Modulo 06</option>
            <option value="Graduated">Formado</option>
          </select>
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
