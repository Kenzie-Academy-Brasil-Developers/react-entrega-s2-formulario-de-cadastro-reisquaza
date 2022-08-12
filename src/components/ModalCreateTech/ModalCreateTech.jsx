import { useContext} from "react";
import { TechsContext } from "../../contexts/TechsContexts";
import { Button } from "../Button";
import FormTech from "../FormTech";
import Modal from "../Modal";

const ModalCreateTech = ({ setIsCreateTech }) => {
  const { createTech } = useContext(TechsContext);
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
