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
        <span className='close-button'
        onClick={handleCloseModal}
        >X</span>
        <h2>Cerrado por vacaciones</h2>
        <h6>
          Estimados clientes y amigos, les informamos que nuestro establecimiento permanecerá cerrado  del 18 al 25 de Septiembre(ambos inclusive).
        </h6>
        {/* <iframe className="video"
          src="https://drive.google.com/file/d/1Hr92lxvOOjfegFIK7wE3WvwAkwS18IKs/preview"
          width="240"
          height="280"
          allow="autoplay"
          muted
          title='news'
        ></iframe> */}
        <button onClick={handleCloseModal}>Acceder</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
