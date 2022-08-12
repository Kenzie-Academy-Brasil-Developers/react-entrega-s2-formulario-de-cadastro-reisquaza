import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContexts";
import { TechsContext } from "../../contexts/TechsContexts";
import { Button } from "../Button";
import FormTech from "../FormTech";
import Modal from "../Modal";

const ModalCreateTech = () => {
  const { createTech } = useContext(TechsContext);
  const { setIsCreateTech } = useContext(ModalContext);

  const closeModal = () => {
    setIsCreateTech(false);
  };

  return (
    <Modal
      setIs={setIsCreateTech}
      title="Cadastrar tecnologia"
      closeModal={closeModal}
    >
      <FormTech techSubmit={createTech}>
        <Button>Cadastrar tecnologia</Button>
      </FormTech>
    </Modal>
  );
};

export default ModalCreateTech;
