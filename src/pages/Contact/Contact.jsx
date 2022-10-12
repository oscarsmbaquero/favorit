import React from "react";
import "./Contact.scss";
// import formImg from "../../assets/images/prueba.png";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import { FormHelperText, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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
      <br />
      <h1>𝔉𝔞𝔳𝔬𝔯𝔦𝔱</h1>
      <form className="form">
        <label className="form__label">Fecha y Hora de la Reserva</label>
        <input className="form__input" type="datetime-local" name="fecha" />
        <label className="form__label">Nombre * </label>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <label className="form__label">Apellidos * </label>
        <input
          className="form__input"
          type="text"
          name="surname"
          placeholder="Apellidos"
        />
        <label className="form__label">Email * </label>
        <input
          className="form__input"
          type="text"
          name="email"
          placeholder="Email"
        />
        <label className="form__label">Teléfono * </label>
        <input
          className="form__input"
          type="text"
          name="email"
          placeholder="Teléfono"
        />
        <label className="form__label">Comensales * </label>
        <input
          className="form__input--comensales"
          type="number"
          name="email"
          placeholder="Comensales"
        />
        <label className="form__label">Comentarios * </label>
        <textarea className="form__textarea"></textarea>
        <br />
        <Button variant="contained" color="primary" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default Contact;
