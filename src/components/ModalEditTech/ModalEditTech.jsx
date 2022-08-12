import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContexts";
import { ButtonDelete, ButtonEdit } from "../Button";
import FormTech from "../FormTech";
import Modal from "../Modal/Modal";

const ModalEditTech = ({ setIsEditTech, techInfo }) => {
  const { deleteTech, editTech } = useContext(TechsContext);
  const { id, title } = techInfo;

  const closeModal = () => {
    setIsEditTech(false);
  };

  return (
    <Modal closeModal={closeModal} title="aaa" setIs={setIsEditTech}>
      <FormTech
        techSubmit={(data) => {
          const status = { status: data.status };
          editTech(status, id);
        }}
        disable={true}
        title={title}
      >
        <div>
          <ButtonEdit type="submit">Editar tecnologia</ButtonEdit>
          <ButtonDelete type="button" onClick={() => deleteTech(id)}>
            Excluir
          </ButtonDelete>
        </div>
      </FormTech>
    </Modal>
  );
};

export default ModalEditTech;
