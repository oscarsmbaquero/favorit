import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalComponent.css';
import logo from "../../assets/images/logoF.png";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Modal"
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      <div className="modal-content">
      <img src={logo} alt={logo} />
        <h2>Cerrado por vacaciones</h2>
        <h6>
        Estimados clientes y amigos , les informamos que nuestro restaurante se encontrará cerrado para mejoras y renovaciones del 7 al 14 de Agosto.
        
        </h6>
        {/* <h5>
          Gracias
        </h5> */}
        <button onClick={handleCloseModal}>Acceder a la web</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
