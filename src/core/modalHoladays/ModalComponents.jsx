import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ModalComponent.css';
import logo from "../../assets/images/logoF.png";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detecta si está en versión móvil

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Modal"
      className={`custom-modal ${isMobile ? 'mobile' : ''}`} // Agrega clase 'mobile' si es versión móvil
      overlayClassName="custom-modal-overlay"
    >
      <div className="modal-content">
        <img src={logo} alt={logo} />
        <h2>Cerrado por vacaciones</h2>
        <h6>
          Estimados clientes y amigos, les informamos que nuestro restaurante permanecerá cerrado para mejoras y renovaciones del 7 al 14 de Agosto.
        </h6>
        <button onClick={handleCloseModal}>Acceder a la web</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
