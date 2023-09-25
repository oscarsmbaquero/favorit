import React, { useState, useEffect } from "react";
import routes from "./Config/routes";
import "./App.scss";
import { SWContextProvider } from "./context/context";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Header2 from "./Components/Header/Header2";
import "bootstrap/dist/css/bootstrap.min.css";
import SplashScreen from "../src/Components/SplashScreen/SplashScreen";

import { IntlProvider, FormattedMessage } from "react-intl";
import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";
import Portuguese from "../src/lang/pt.json";
import EusKara from "../src/lang/eu.json";
import French from "../src/lang/fr.json";
//import I18n from "./context/i18n/I18n";
//import logo from "./assets/images/reservas.png";
import CookieConsent from "react-cookie-consent";
import ReservasIcono from "./core/ReservasIcono/ReservasIcono";
import ModalComponent from "./core/modalHoladays/ModalComponents";
//import ReservaIcono3 from "./core/ReservasIcono/ReservasIcono3";
export const ContextI18n = React.createContext();

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  const [holadays, setHolidaysScreen] = useState(false);
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(Spanish);
  //const [pulsado, setPulsado] = useState(false);

  useEffect(() => {
    setTimeout(() => setSplashScreen(false), 2000);
  });

  useEffect(() => {
    setTimeout(() => setHolidaysScreen(true), 4000);
  });

  useEffect(() => {
    if (locale === "pt") {
      setMessages(Portuguese);
    } else if (locale === "en") {
      setMessages(English);
    } else if (locale === "eu") {
      setMessages(EusKara);
    } else if (locale === "fr") {
      setMessages(French);
    } else {
      setMessages(Spanish);
    }
  }, [locale]);

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    if (newLocale === "pt") {
      setMessages(Portuguese);
    } else if (newLocale === "en") {
      setMessages(English);
    } else if (newLocale === "eu") {
      setMessages(EusKara);
    } else if (newLocale === "fr") {
      setMessages(French);
    } else {
      setMessages(Spanish);
    }
  }

  return (
    <>
      {splashScreen ? (
        <SplashScreen />
      ) : (
        <div className="App">
          <ContextI18n.Provider value={{ locale, selectLanguage }}>
            <IntlProvider locale={locale} messages={messages}>
              <SWContextProvider>
                <Router>
                  <Header2 />
                  {/* modal de anuncio de vacaciones */}
                 {/* {holadays &&
                  <ModalComponent />
                  
                 } */}
                 
                  <CookieConsent
                    location="bottom"
                    buttonText="Aceptar"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                  >
                    Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
                    {/* <span style={{ fontSize: "10px" }}>
                      This bit of text is smaller :O
                    </span> */}
                  </CookieConsent>
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                 <ReservasIcono/> 
                  {/* <div className="reservas">
                    <figure>
                      <Link to={"/reservas"}>
                        <img src={logo} alt="logo"></img>
                      </Link>
                    </figure>
                  </div> */}
                  <Footer />
                </Router>
              </SWContextProvider>
            </IntlProvider>
          </ContextI18n.Provider>
        </div>
      )}
    </>
  );
}

export default App;
