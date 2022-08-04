import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/user";
import api from "../../services/api";
import toast, { Toaster } from "react-hot-toast";

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
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div>
      <Toaster />
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <h3>Email</h3>
          <input type="email" id="email" {...register("email")} />
          <h3>{errors.email?.message}</h3>
        </label>
        <label htmlFor="password">
          <h3>Senha</h3>
          <input type="password" id="password" {...register("password")} />
        </label>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/register', {replace: true})} >TTTTTTTTTTTTTTT</button>
    </div>
  );
};

export default Login;
