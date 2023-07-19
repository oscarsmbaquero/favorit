import React, { useState, useEffect, useContext } from "react";
import "./Home.scss";
//import logo from "../../assets/images/logoF.png";
//import Alert from "../Alert/Alert";
//import { Parallax } from "react-parallax";
//import { SWContext } from "../../context/context";
// import alhambra from "../../assets/images/alhambras.jpg";
// import barondeley from "../../assets/images/barondeley.jpg";
// import logoAlhambra from "../../assets/images/logoAlhambra.png";
// import museum from "../../assets/images/fincaMuseum.jpg";
// import logoMuseum from "../../assets/images/logomuseum.png";

import { FormattedMessage } from "react-intl";
// import { convertLength } from "@mui/material/styles/cssUtils";
// import { responsiveFontSizes } from "@mui/material";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  //const { galeria } = useContext(SWContext);
  return (
    <>
      <Gallery/>
      
        {/* <div class="star-wars-intro">
        <div class="main-content">
          <div class="title-content">
            <FormattedMessage id="app.textHome"/>
          </div>
        </div> */}
      {/* </div> */}
      <div className="home">
      <p>
          <FormattedMessage id="app.textHome" />
        </p>
       </div>
        {/* <p>
          <FormattedMessage id="app.textHome" />
        </p> */}
      {/* </div>  */}
    </>
  );
};

export default Home;
