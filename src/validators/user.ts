import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const registerSchema = yup.object({
  email: yup.string().required("Campo obrigatorio").email("Email valido"),
  password: yup
    .string()
    .required("Campo obrigatorio")
    .matches(/^(?=.*\d)/, "Deve conter pelo menos um número")
    .matches(/^(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
    .matches(/^(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
    .matches(/^(?=.*[$*&@#])/, "Deve conter ao menos um caractere especial")
    .min(8, "Senha deve conter ao menos 8 caracteres"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatorio")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  name: yup.string().required("Campo obrigatorio"),
  bio: yup.string().required("Campo obrigatorio"),
  contact: yup.string().required("Campo obrigatorio"),
  course_module: yup.string().required("Campo obrigatorio"),
});
