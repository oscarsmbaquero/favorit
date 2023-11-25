import React,{useEffect} from "react";
import "./Cartas.scss";
import ofertaNavidad from "../../assets/images/cartas/menu_navidad.jpg";
import navidad1 from "../../assets/images/navidad1.jpg";
import navidad2 from "../../assets/images/navidad2.jpg";
import navidad3 from "../../assets/images/navidad3.jpg";

const CartaFood = () => {

  const imagenesNavidad = [navidad1, navidad2, navidad3];

  return (
    <section className="food-navidad">
      {/* <div className="food__container">
        <img
          className="food__imageNavidad"
          src={navidad1}
          alt="ofertaNavidad"
        ></img>
      </div> */}
      <div className="food__container-navidad">
        {imagenesNavidad.map((imagen, index) => (
          <img
            key={index}
            className="food__imageNavidad"
            src={imagen}
            alt={`ofertaNavidad${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CartaFood;
