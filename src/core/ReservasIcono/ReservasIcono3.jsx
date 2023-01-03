//import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ReservasIcono.scss';
const ReservaIcono3 = () => {
  const [bgImage, handleImage] = useState(
    "https://res.cloudinary.com/dcfk8yjwr/image/upload/v1672784769/reservas_riyjxl.png"
  );
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 240) {
      handleImage(
        "https://res.cloudinary.com/dcfk8yjwr/image/upload/v1672784769/reservas_riyjxl.png"
        
      );
    } else {
      handleImage(
        "https://res.cloudinary.com/dcfk8yjwr/image/upload/v1672785543/logoFavorit_ly3ghx.png"
      );
    }
  });

  return (
    <div className="reservas" >
        <figure>
          <Link to={"/reservas"}>
          <img
        id="myimage"
        src={bgImage}
        alt=""
      />   
          </Link>
        </figure>
      </div>
    // <div className="reservas">
    //   <img
    //     id="myimage"
    //     src={bgImage}
    //     alt=""
    //   />
    // </div>
  );
}
export default ReservaIcono3;