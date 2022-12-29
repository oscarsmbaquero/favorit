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
import IconoNuevoGasto from "../src/assets/images/nuevo-gasto.svg";
import Home from "./pages/Home/Home";
import Horario from "./pages/Horario/Horario";

import { IntlProvider, FormattedMessage } from "react-intl";
import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";
import Portuguese from "../src/lang/pt.json";
import EusKara from "../src/lang/eu.json";
import French from "../src/lang/fr.json";
import I18n from "./context/i18n/I18n";
import logo from './assets/images/reservas.png'
export const ContextI18n = React.createContext();

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(Spanish);
  //const [pulsado, setPulsado] = useState(false);

  useEffect(() => {
    setTimeout(() => setSplashScreen(false), 2000);
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
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                  <div className="i18n">
                    <figure>
                    <img className="logoReservas1" src={logo} alt="logo"></img>
                    </figure>
                  </div>
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
