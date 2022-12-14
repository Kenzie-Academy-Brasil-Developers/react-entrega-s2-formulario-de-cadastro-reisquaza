import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { iTech } from "../../contexts/TechsContexts";
import { FormModal } from "../Form";

interface iFormTech {
  children: ReactNode;
  disable?: boolean;
  title?: string;
  techSubmit: SubmitHandler<FieldValues>;
}

const FormTech = ({ children, techSubmit, disable, title }: iFormTech) => {
  const { register, handleSubmit } = useForm();

  // console.log(techSubmit)

  return (
    <FormModal onSubmit={handleSubmit(techSubmit)}>
      <label htmlFor="title">
        <p>Nome</p>
        <input
          type="text"
          id="title"
          {...register("title")}
          disabled={disable}
          value={title}
        />
        {/* <h4>{errors.title?.message}</h4> */}
      </label>

      <label htmlFor="status">
        <p>Selecionar status</p>
        <select id="status" {...register("status")}>
          <option value="">Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Avançado">Avançado</option>
          <option value="Intermediário">Intermediário</option>
        </select>
        {/* <h4>{errors.status?.message}</h4> */}
      </label>
      {children}
    </FormModal>
  );
};

export default FormTech;
