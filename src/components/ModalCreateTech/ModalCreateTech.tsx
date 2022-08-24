import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContexts";
import { TechsContext } from "../../contexts/TechsContexts";
import { Button } from "../Button";
import { FormModal } from "../Form";
import Modal from "../Modal";

const ModalCreateTech = () => {
  const { createTech }: any = useContext(TechsContext);
  const { setIsCreateTech } = useContext(ModalContext);
  const { register, handleSubmit } = useForm();

  const closeModal = () => {
    setIsCreateTech(false);
  };

  return (
    <Modal
      setIs={setIsCreateTech}
      title="Cadastrar tecnologia"
      closeModal={closeModal}
    >
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
        <Button></Button>
      </FormModal>
    </Modal>
  );
};

export default ModalCreateTech;
