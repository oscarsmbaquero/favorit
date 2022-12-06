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
function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  //const [pulsado, setPulsado] = useState(false);

  useEffect(() => {
    setTimeout(() => setSplashScreen(false), 2000);
  });
  return (
    <>
      {splashScreen ? (
        <SplashScreen />
      ) : (
        <div className="App">
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
              {/* <div className="nuevo-gasto">
                <Link to={"/cartaFood"}>
                  <figure>
                    <img
                      src={IconoNuevoGasto}
                      alt="icono nuevo aviso"
                      //onClick={() => setPulsado(!pulsado)}
                    />
                  </figure>
                </Link>
              </div> */}
              {/* {pulsado? (alert('Si')) :(alert('No'))}     */}
              <Footer />
            </Router>
          </SWContextProvider>
        </div>
      )}
    </>
  );
}

export default App;
