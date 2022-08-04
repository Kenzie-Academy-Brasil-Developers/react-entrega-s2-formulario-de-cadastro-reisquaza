import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const registerSchema = yup.object({
  email: yup.string().required("Campo obrigatorio").email("Email valido"),
  password: yup
    .string()
    .required("Campo obrigatorio")
    .min(8, "Senha deve conter ao menos 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Insira uma senha mais forte"
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatorio")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  name: yup.string().required("Campo obrigatorio"),
  bio: yup.string().required("Campo obrigatorio"),
  contact: yup.string().required("Campo obrigatorio"),
  course_module: yup.string().required("Campo obrigatorio"),
});
