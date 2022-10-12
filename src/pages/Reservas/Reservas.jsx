import React from "react";
import "./Reservas.scss";
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
import { text } from "@fortawesome/fontawesome-svg-core";
import { TextField } from "@mui/material";

const Reservas = () => {
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
    <section className="sectionFormReservas">
      <h1 className="title"> 𝔉𝔞𝔳𝔬𝔯𝔦𝔱</h1>
      <br />
      <form className="form">
        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-column col-12 col-md-6">
            <label className="form__label">Fecha de Reserva * </label>
            <input className="form__input" type="datetime-local" name="fecha" />
          </div>
          <div className="d-flex flex-column col-12 col-md-6 mx-md-3">
            <label className="form__label">Nombre * </label>
            <input
              className="form__input"
              type="text"
              name="name"
              //placeholder="Nombre"
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-column col-12 col-md-6">
            <label className="form__label">Email * </label>
            <input className="form__input" type="text" name="fecha" />
          </div>
          <div className="d-flex flex-column col-12 col-md-6 mx-md-3">
            <label className="form__label">Teléfono * </label>
            <input
              className="form__input"
              type="text"
              name="name"
              //placeholder="Nombre"
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-column col-12 col-md-6">
            <label className="form__label">Comensales * </label>
            <input className="form__input" type="text" name="fecha" />
          </div>
          
          <div className="d-flex flex-column col-12 col-md-6 mx-md-3">
            <label className="form__label">Comentario</label>
            <input className="form__input" type="text" name="fecha" />
          </div>
        </div>
        <br />
        <Button variant="contained" color="primary" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default Reservas;
