import React from "react";
import "./Contact.scss";
// import formImg from "../../assets/images/prueba.png";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


import { Box, Button, Container, FormControl, Grid, ThemeProvider } from "@material-ui/core";
import { FormHelperText, Input, InputLabel } from "@material-ui/core";

const Contact = () => {
  let navigate = useNavigate();

  const sendMail = (e) => {
    try {
      e.preventDefault();
      console.log(e.target.name);
      emailjs
        .sendForm(
          "service_e9hfsaz",
          "template_lvs0put",
          e.target,
          "dso8n6rVU1ADlfbV4"
        )
        .then((response) => console.log(response));
      Swal.fire({
        title: "Success!",
        text: "Enviado Formulario Correctamente",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };
  return (
   
   
      <section className="sectionForm">
      <br/><h1>𝔊𝔞𝔰𝔱𝔯𝔬 𝔅𝔞𝔯  𝔉𝔞𝔳𝔬𝔯𝔦𝔱𝔢</h1><br/>
       <form className="form">
            <label className="edit__label">Fecha y Hora para la Reserva</label>
              <input className='edit__input' type="datetime-local" name="fecha" />
            <label>Nombre</label>
              <input className='edit__input' type="text" name="name" placeholder="Nombre"/>
            <label>Apellidos</label>
              <input className='edit__input' type="text" name="surname" placeholder="Apellidos"/>
            <label>Email</label>
              <input className='edit__input' type="text" name="email" placeholder="Email"/>
            <label>Teléfono</label>
              <input className='edit__input' type="text" name="email" placeholder="Teléfono"/>
            <label>Comensales</label>
              <input className='edit__input' type="text" name="email" placeholder="Teléfono"/><br/>
              <Button variant="contained" type='submit'  >
                Enviar
            </Button>
       </form>
      </section>
      
   
  );
};

export default Contact;
