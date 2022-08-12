import { ButtonDelete, ButtonEdit } from "../Button";
import FormTech from "../FormTech";
import Modal from "../Modal/Modal";

const ModalEditTech = ({ setIsEditTech, id }) => {
  const closeModal = () => {
    setIsEditTech(false);
  };
  const teste = () => {
    console.log(id);
  };
  // console.log(modalRef)

  return (
    <Modal closeModal={closeModal} title="aaa" setIs={setIsEditTech}>
      <FormTech>
        <div>
          <ButtonEdit>Editar tecnologia</ButtonEdit>
          <ButtonDelete onClick={teste}>Excluir</ButtonDelete>
        </div>
      </FormTech>
    </Modal>
  );
};

export default ModalEditTech;
