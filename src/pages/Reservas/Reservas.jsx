import React, { useState } from "react";
import "./Reservas.scss";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/images/logoFavorit.jpeg";
import fondo from "../../assets/images/logo2.jpeg";

import { Button } from "@material-ui/core";
// import { FormHelperText, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { SettingsBluetoothTwoTone } from "@material-ui/icons";
// import { text } from "@fortawesome/fontawesome-svg-core";
// import { TextField } from "@mui/material";

const Reservas = () => {
  let navigate = useNavigate();
  //const [error,setError] = useState('')

  const sendMail = (e) => {
    try {
      e.preventDefault();
      console.log(e.target.personas.value);
      emailjs
        .sendForm(
          "service_xewxx67",
          "template_aeznbzf",
          e.target,
          "b7ggNjyANCWAU_EWv"
        )
        .then((response) => console.log(response));
      Swal.fire({
        //title: "Success!",
        text: " Gracias por la reserva. Le confirmaremos su reserva lo antes posible",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };
  const setAviso =(e) => {
    console.log(e);
    if(e === '+10'){
      Swal.fire({
        //title: "Success!",
        text: "Para Grupos superiores a 10 personas consulte disponibiliad por teléfono",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/reservas");
    }
    
   
  }


  
  return (
    <>
      <div className="container">
        <section className="sectionFormReservas row">
          <div className="col-12 col-lg-6 my-auto d-none d-lg-block">
            <img className="logoReservas" src={fondo} alt="logo"></img>
          </div>
          <div className="col-12 col-lg-6 my-auto">
            <form onSubmit={sendMail} className="form">
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
                  {/* <input className="form-control" type="text" name="personas" /> */}
                  <select class="form-control" id="control2" name="personas" onChange={(e) => setAviso(e.target.value)}>
                    <option value = '1' >1 Persona</option>
                    <option value = '2' >2 Personas</option>
                    <option value = '3' >3 Personas</option>
                    <option value = '4' >4 Personas</option>
                    <option value = '5' >5 Personas</option>
                    <option value = '6' >6 Personas</option>
                    <option value = '7'>7 Personas</option>
                    <option value = '8'>8 Personas</option>
                    <option value = '9'>9 Personas</option>
                    <option value = '10'>10 Personas</option>
                    <option value = '+10'>+10 Personas</option>
                  </select>
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
                //color="primary"
                type="submit"
                endIcon={<SendIcon />}
                style={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  // marginTop:'0px'
                }}
              >
                Reservar
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reservas;
