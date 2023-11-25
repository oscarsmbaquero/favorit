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
      <Gallery />

      {/* <div class="star-wars-intro">
        <div class="main-content">
          <div class="title-content">
            <FormattedMessage id="app.textHome"/>
          </div>
        </div> */}
      {/* </div> */}
      <div className="home">
        <iframe className="video"
          src="https://drive.google.com/file/d/1Hr92lxvOOjfegFIK7wE3WvwAkwS18IKs/preview"
          // width="640"
          // height="480"
          allow="autoplay"
          muted
        ></iframe>
        <h3 className="text-home">
          <FormattedMessage id="app.textHome" />
        </h3>
      </div>
      {/* <p>
          <FormattedMessage id="app.textHome" />
        </p> */}
      {/* </div>  */}
    </>
  );
};

export default Home;
