import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../contexts/TechsContexts";
import { Button } from "../Button";
import { FormModal } from "../Form";
import Modal from "../Modal/Modal";

const ModalCreateTech = ({ setIsOpenModal }) => {
  const { register, handleSubmit } = useForm();
  const { createTech } = useContext(TechsContext);

  return (
    <Modal title="Cadastrar Tecnologia" setIsOpenModal={setIsOpenModal}>
      <FormModal onSubmit={handleSubmit(createTech)}>
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

        <Button>Cadastrar tecnologia</Button>
      </FormModal>
    </Modal>
  );
};

export default ModalCreateTech;
