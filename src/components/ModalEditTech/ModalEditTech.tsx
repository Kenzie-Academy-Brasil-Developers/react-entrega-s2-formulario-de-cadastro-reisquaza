import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContexts";
import { TechsContext } from "../../contexts/TechsContexts";
import { ButtonDelete, ButtonEdit } from "../Button";
import FormTech from "../FormTech";
import Modal from "../Modal/Modal";

interface iModalEdit {
  editID: string;
  editTitle: string;
}

const ModalEditTech = ({ editID, editTitle }: iModalEdit) => {
  const { deleteTech, editTech } = useContext(TechsContext);
  const { setIsEditTech } = useContext(ModalContext);

  const closeModal = () => {
    setIsEditTech(false);
  };

  return (
    <Modal closeModal={closeModal} title='Editar tecnologia' setIs={setIsEditTech}>
      <FormTech
        techSubmit={(data) => {
          const status = { status: data.status };
          editTech(status, editID);
        }}
        disable={true}
        title={editTitle}
      >
        <div>
          <ButtonEdit type="submit">Editar tecnologia</ButtonEdit>
          <ButtonDelete type="button" onClick={() => deleteTech(editID)}>
            Excluir
          </ButtonDelete>
        </div>
      </FormTech>
    </Modal>
  );
};

export default ModalEditTech;
