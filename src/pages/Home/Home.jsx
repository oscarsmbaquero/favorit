import React, { useState, useEffect } from "react";
import "./Home.scss";
import logo from "../../assets/images/logoF.png";
import Alert from "../Alert/Alert";

import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <>
    
      <div className="home">
      {/* <Alert/> */}
        <img className="home__logo" src={logo} alt="logo"></img>
        <p>
        <FormattedMessage id="app.textHome" />
        </p>
      </div>
      
    </>
  );
};

export default Home;
