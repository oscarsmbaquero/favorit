import React, { useState, useEffect } from "react";
import "./Home.scss";
import logo from "../../assets/images/logoFavorit.jpeg";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <img className="logo" src={logo} alt="logo"></img>
        <p>
          Somos un gastrobar innovador, ofrecemos los mejores servicios para
          todo tipo de clientes. Cocina oriental, occidental y tradicional con
          cartas para vegetarianos y celíacos (platos sin gluten), también
          puedes disfrutar de nuestro delicioso café, vino y copas con tus
          familiares y amigos.
        </p> */}
        <div class="star-wars-intro">
          <h2 class="main-logo"></h2>
          <p class="intro-text"></p>

          <div class="main-content">
            <div class="title-content">
              <p class="content-header">
                <img className="logo" src={logo} alt="logo"></img>
              </p>

              <p class="content-body">
                Somos un gastrobar innovador, ofrecemos los mejores servicios
                para todo tipo de clientes. Cocina oriental, occidental y
                tradicional con cartas para vegetarianos y celíacos.
                También
                puedes disfrutar de nuestro delicioso café, vino y copas con tus
                familiares y amigos.
                {/* <br/>
                <img className="logo" src={logo} alt="logo"></img> */}
              </p>
              {/* <a href="./StarScroll.zip" class="space-button">Download The Code Now!</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
