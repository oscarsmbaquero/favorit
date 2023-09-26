import React, { useState, useRef } from "react";
import "./Reservas.scss";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//import logo from "../../assets/images/logoF.png";
import fondo from "../../assets/images/logo2.jpeg";
import Confirm from "../../core/ConfirmDialog/Confirm";
import { FormattedMessage } from "react-intl";
//import { Button } from "@material-ui/core";

//import SendIcon from "@material-ui/icons/Send";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
//import TextareaAutosize from "@mui/material/TextareaAutosize";

const Reservas = () => {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    handleClickOpen();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    if (!form.fecha.value) {
      newErrors.fecha = "La fecha es obligada";
    }
    if (!form.name.value) {
      newErrors.name = "El nombre es obligado";
    }
    if (!form.email.value) {
      newErrors.email = "El mail es obligato";
    }
    if (!form.telefono.value) {
      newErrors.telefono = "El teléfono es obligado";
    }
    if (!form.personas.value) {
      newErrors.personas = "El número de comensales es obligado";
    }

    setErrors(newErrors);

    // Si no hay errores, envía el formulario
    if (Object.keys(newErrors).length === 0) {
      sendMail(e);
    }
  };

  const sendMail = (e) => {
    e.preventDefault();
    try {
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
  const setAviso = (e) => {
    //console.log(e);
    if (e === "+10") {
      Swal.fire({
        //title: "Success!",
        text: "Para Grupos superiores a 10 personas consulte disponibiliad por teléfono",
        icon: "error",
        confirmButtonText: "Ok",
      });
      navigate("/reservas");
    }
  };

  return (
    <>
      <div className="containers" data-aos="fade-up">
        <Confirm open={open} handleClose={handleClose} />
        <section className="sectionFormReservas row">
          <div className="col-12 col-lg-6 my-auto d-none d-lg-block">
            <img className="logoReservas" src={fondo} alt="logo"></img>
          </div>
          <div className="col-12 col-lg-6 my-auto">
            <form className="form" onSubmit={validateForm}>
              <br />
              <div className="d-flex flex-column flex-md-row">
                <div className="d-flex flex-column col-11 col-md-6">
                  {errors.fecha ? (
                    errors.fecha && (
                      <span className="error">{errors.fecha}</span>
                    )
                  ) : (
                    <label className="form__label">
                      <FormattedMessage id="app.fecha" />
                    </label>
                  )}

                  <input
                    className="form-control"
                    type="datetime-local"
                    name="fecha"
                  />
                </div>
                <div className="d-flex flex-column col-11 col-md-6 mx-md-3">
                  {errors.name ? (
                    errors.name && <span className="error">{errors.name}</span>
                  ) : (
                    <label className="form__label">
                      <FormattedMessage id="app.name" />
                    </label>
                  )}
                  <input className="form-control" type="text" name="name" />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row">
                <div className="d-flex flex-column col-11 col-md-6">
                {errors.email ? (
                    errors.email && <span className="error">{errors.email}</span>
                  ) : (
                    <label className="form__label">Email * </label>
                  )}
                  <input className="form-control" type="text" name="email" />
                </div>
                <div className="d-flex flex-column col-11 col-md-6 mx-md-3">
                {errors.telefono ? (
                    errors.telefono && <span className="error">{errors.telefono}</span>
                  ) : (
                    <label className="form__label">
                    <FormattedMessage id="app.tlf" />
                  </label>
                  )}
                  <input className="form-control" type="text" name="telefono" />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-column col-11 mx-md-3 ">
                  <label className="form__label">
                    <FormattedMessage id="app.comensales" />
                  </label>
                  {/* <input className="form-control" type="text" name="personas" /> */}
                  <select
                    class="form-control"
                    id="control2"
                    name="personas"
                    onChange={(e) => setAviso(e.target.value)}
                  >
                    <option value="1">
                      1 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="2">
                      2 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="3">
                      3 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="4">
                      4 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="5">
                      5 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="6">
                      6 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="7">
                      7 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="8">
                      8 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="9">
                      9 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="10">
                      10 <FormattedMessage id="app.diners" />
                    </option>
                    <option value="+10">
                      +10 <FormattedMessage id="app.diners" />
                    </option>
                  </select>
                </div>
                <div className="d-flex flex-column col-11 mx-md-3">
                  <label className="form__label">
                    <FormattedMessage id="app.comments" />
                  </label>
                  <textarea
                    className="form-control"
                    name="comentarios"
                  ></textarea>
                </div>
              </div>
              <br />
              <button class="btn-13">
                <span>Reservar</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reservas;
