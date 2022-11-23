import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useContext } from "react";
import { SWContext } from "../../context/context";
import "./Pedidos.scss";

const Pedidos = () => {
  const { platos } = useContext(SWContext);
  return (
    <div className="container">
      <section className="sectionFormReservas row">
        <div className="col-12 col-lg-6 my-auto"></div>
        <select value={"selected"} className="select-user">
          {/* <option>Selecciona un usuario</option> */}
          <option key={"default"} selected value={"default"}>
            Selecciona tu pedido
          </option>
          {platos.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title} {option.descripcion}
            </option>
          ))}
        </select>
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          style={{
            borderRadius: 50,
            backgroundColor: "black",
            color: "white",
            margin: "10px",
            // marginTop:'0px'
          }}
        >
          Enviar Mail
        </Button>
      </section>
    </div>
  );
};

export default Pedidos;
