import React from "react";
import "./Reservas.scss";
// import formImg from "../../assets/images/prueba.png";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import logo from "../../assets/images/logo.png";
import  fondo  from '../../assets/images/bar4.jfif';

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
// import { FormHelperText, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
// import { text } from "@fortawesome/fontawesome-svg-core";
// import { TextField } from "@mui/material";

const Reservas = () => {
  let navigate = useNavigate();

  const sendMail = (e) => {
    console.log("entro");
    try {
      e.preventDefault();
      console.log(e.target.name);
      emailjs
        .sendForm(
          "service_xewxx67",
          "template_aeznbzf",
          e.target,
          "b7ggNjyANCWAU_EWv"
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
    <div className="container">
      <section className="sectionFormReservas row">
        <div className="col-12 col-lg-6 my-auto d-none d-lg-block">
          <img className="logoReservas" src={fondo} alt="logo"></img>
        </div>
        <div className="col-12 col-lg-6 my-auto">
          <form  onSubmit={sendMail}className="form">
          <img className="logoReservas1" src={logo} alt="logo"></img>
            <br />
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column col-11 col-md-6">
                <label className="form__label">Fecha de Reserva * </label>
                <input
                  className="form-control"
                  type="datetime-local"
                  name="fecha"
                />
              </div>
              <div className="d-flex flex-column col-11 col-md-6 mx-md-3">
                <label className="form__label">Nombre * </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  //placeholder="Nombre"
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column col-11 col-md-6">
                <label className="form__label">Email * </label>
                <input className="form-control" type="text" name="email" />
              </div>
              <div className="d-flex flex-column col-11 col-md-6 mx-md-3">
                <label className="form__label">Teléfono * </label>
                <input
                  className="form-control"
                  type="text"
                  name="telefono"
                  //placeholder="Nombre"
                />
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column col-11 mx-md-3 ">
                <label className="form__label">Personas * </label>
                <input className="form-control" type="text" name="personas" />
              </div>
              <div className="d-flex flex-column col-11 mx-md-3">
                <label className="form__label">Comentarios</label>
                <textarea
                  className="form-control"
                  name="comentarios"
                ></textarea>
              </div>
            </div>
            <br />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SendIcon />}
              style={{ borderRadius: 50 }}
            >
              Reservar
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Reservas;
