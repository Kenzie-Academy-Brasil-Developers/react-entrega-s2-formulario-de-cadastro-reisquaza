import { ContainerModal } from "../../styles/container";
import { MdClose } from "react-icons/md";
import { ModalBox, ModalTitle } from "./style";
import { ReactNode, useEffect, useRef } from "react";

interface iModal {
  children: ReactNode;
  title: string;
  setIs: (arg0: boolean) => void;
  closeModal: () => void;
}

const Modal = ({ children, title, setIs, closeModal }: iModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (e: any) => {
      if(null !== modalRef.current){
        !modalRef.current.contains(e.target) && setIs(false)
      }
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setIs]);

  return (
    <ContainerModal>
      <ModalBox ref={modalRef}>
        <ModalTitle>
          <h3>{title}</h3>
          <button onClick={closeModal}>
            <MdClose />
          </button>
        </ModalTitle>
        {children}
      </ModalBox>
    </ContainerModal>
  );
};

export default Modal;
