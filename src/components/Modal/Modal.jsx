import React, {useState}  from "react";
import ReactDom from "react-dom";
import "./modal.css";
import { IoIosClose } from "react-icons/io";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen, 
    openModal,
    closeModal,
  };
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <section className="moodal">
          {children}
          <IoIosClose className="ml-x" onClick={onClose} />
      </section>
    </>,
    document.getElementById("portal")
  );
};

export {useModal, Modal};
