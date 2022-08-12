import { useEffect, useRef } from "react";
import { ContainerModal } from "../../styles/container";
import { MdClose } from "react-icons/md";
import { ModalBox, ModalTitle } from "./style";

const Modal = ({ children, title, setIsOpenModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setIsOpenModal]);

  return (
    <ContainerModal>
      <ModalBox ref={modalRef}>
        <ModalTitle>
          <h3>{title}</h3>
          <button onClick={() => setIsOpenModal(false)}>
            <MdClose />
          </button>
        </ModalTitle>
        {children}
      </ModalBox>
    </ContainerModal>
  );
};

export default Modal;
