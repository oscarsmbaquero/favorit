import React, { useState, useEffect, useContext } from "react";
import "./Home.scss";
import logo from "../../assets/images/logoF.png";
import Alert from "../Alert/Alert";
import { Parallax } from "react-parallax";
import { SWContext } from "../../context/context";
import alhambra from "../../assets/images/alhambras.jpg";
import barondeley from "../../assets/images/barondeley.jpg";
import logoAlhambra from "../../assets/images/logoAlhambra.png";
import logoBaron from "../../assets/images/logobaron.png";

import { FormattedMessage } from "react-intl";
import { convertLength } from "@mui/material/styles/cssUtils";

const Home = () => {
  const { galeria } = useContext(SWContext);
  return (
    <>
      <div className="home">
        {/* <Alert/> */}
        <img className="home__logo" src={logo} alt="logo"></img>
        <p>
          <FormattedMessage id="app.textHome" />
        </p>
        <div style={{ height: "100%", width: "100%" }}>
          <Parallax
            strength={500}
            blur={{ min: -15, max: 15 }}
            bgImage={alhambra}
            
            
            // style={{
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div style={{ height: "100vh", width: "100vw" }}>
              <div className="contenido">
                <img src={logoAlhambra} alt="logo" className="logo"></img>
              </div>
            </div>
          </Parallax>
          {/* <Parallax
            strength={500}
            blur={{ min: -15, max: 15 }}
            bgImage={barondeley}
            
            
            // style={{
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div style={{ height: "100vh" }}>
              <div className="contenido">
                <img src={logoBaron} alt="logo" className="logo"></img>
              </div>
            </div>
          </Parallax> */}
          
        </div>
      </div>
    </>
  );
};

export default Home;
