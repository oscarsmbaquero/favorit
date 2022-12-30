import React, { useState, useEffect, useContext } from "react";
import "./Home.scss";
import logo from "../../assets/images/logoF.png";
import Alert from "../Alert/Alert";
import { Parallax } from "react-parallax";
import { SWContext } from "../../context/context";
import alhambra from "../../assets/images/alhambras.jpg";
import barondeley from "../../assets/images/barondeley.jpg";
import logoAlhambra from "../../assets/images/logoAlhambra.png";
import museum from "../../assets/images/fincaMuseum.jpg";
import logoMuseum from "../../assets/images/logomuseum.png";

import { FormattedMessage } from "react-intl";
import { convertLength } from "@mui/material/styles/cssUtils";
import { responsiveFontSizes } from "@mui/material";

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
            // blur={{ min: -8, max: 5 }}
            bgImage={alhambra}
            style={{             
              backgroundize:'cover',
              backgroundPosition:'center',
              height: "800px",
            }}
          >
            <div style={{ height: "100%", width: "100%" }}>
              <div className="contenido">
                <img src={logoAlhambra} alt="logo" className="logo"></img>
              </div>
            </div>
          </Parallax>
          <Parallax
            strength={500}
            //blur={{ min: -5, max: 5 }}
            bgImage={museum}
            style={{             
              width: "100vw",
              height: "1350px",
            }}
          >
            <div style={{ height: "100vh" }}>
              <div className="contenido">
                <img src={logoMuseum} alt="logo" className="logo"></img>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default Home;
