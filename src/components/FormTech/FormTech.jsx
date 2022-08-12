import { useForm } from "react-hook-form";
import { FormModal } from "../Form";

const FormTech = ({children, techSubmit}) => {
  const {register, handleSubmit} = useForm()


  return (
    <FormModal onSubmit={handleSubmit(techSubmit)}>
      <label htmlFor="title">
          <p>Nome</p>
          <input type="text" id="title" {...register("title")} />
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
