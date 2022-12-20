import React, { useState, useEffect } from "react";
import "./Home.scss";
import logo from "../../assets/images/logoFavorit.jpeg";
import Alert from "../Alert/Alert";

const Home = () => {
  return (
    <>
    
      <div className="home">
      <Alert/>
        <img className="logo" src={logo} alt="logo"></img>
        <p>
          Somos un gastrobar innovador, ofrecemos los mejores servicios para
          todo tipo de clientes. Cocina tradicional, occidental y oriental. Disponemos de
          cartas para  celíacos y vegetarianos . También
          puedes disfrutar de nuestro delicioso café, vino y copas con tus
          familiares y amigos.
        </p>
        {/* <div class="star-wars-intro">
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
               
              </p>
              
            </div>
          </div>
        </div> */}
      </div>
      
    </>
  );
};

export default Home;
