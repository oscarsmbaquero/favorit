import React from "react";
import "./Contact.scss";
// import formImg from "../../assets/images/prueba.png";
import emailjs from '@emailjs/browser';
import {  useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'// hay que probarlo

const Contact = () => {
  let navigate = useNavigate();

  const sendMail=(e)=>{
    try {
      e.preventDefault();
      console.log(e.target.name);
      emailjs.sendForm('service_e9hfsaz','template_lvs0put',e.target,'dso8n6rVU1ADlfbV4')
      .then(response =>console.log(response))
      Swal.fire({
        title: 'Success!',
        text: 'Enviado Formulario Correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate("/");
      
    } catch (error) {
      navigate("/");
    }
      
}
  return (
    <>

      <section className="sectionForm">
      {/* <img className="sectionForm__img" src={formImg} alt="..." /> */}
      <form className="sectionForm__form" onSubmit={sendMail}>
          <fieldset className="sectionForm__fieldset1">
          <label className="sectionForm__label">Nombre
          <input
            className="sectionForm__input"
            id="name"
            name="name"
            type="text"

            // placeholder="Nombre:..."
            /></label>
          <label className="sectionForm__label">Email
          <input
            className="sectionForm__input"
            id="email"
            name="email"
            type="email"
            // placeholder="Email:..."
            /></label>
          <label className="sectionForm__label">Teléfono
          <input
            className="sectionForm__input"
            id="phone"
            name="phone"
            type="text"
            // placeholder="Teléfono:..."
            /></label>
          </fieldset>
          <label className="sectionForm__label"> Mensaje</label>
          <textarea
            className="sectionForm__textarea"
            id="message"
            name="message"
            type="text"
            // placeholder="Deja tu mensaje:..."
            rows='15'
            columns='10'
            />
          {/* <h2 className="sectionForm__h2">De donde tu ere</h2> */}
            <fieldset className="sectionForm__fieldset2">
            <div className="sectionForm__divDirecc">
              <label className="sectionForm__label">Comensales
            <input
              className="sectionForm__input"
              id="ciudad"
              name="ciudad"
              type="text"
              // placeholder="Ciudad:..."
              /></label>
              <label className="sectionForm__label">Teléfono
          <input
            className="sectionForm__input"
            id="phone"
            name="phone"
            type="text"
            // placeholder="Teléfono:..."
            /></label>
              
            </div>
            
                          </fieldset>
        {/* <button className="sectionForm__button">
          Enviar mensaje
        </button> */}
        
      </form>
      </section>
      </>
  );
};

export default Contact;
