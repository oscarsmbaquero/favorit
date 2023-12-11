import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../../assets/images/logoF.png";
import navidad from "../../assets/images/regalos.png";
 import nuevo from "../../assets/images/new.png";
//import new from "../../assets/images/new.png";
import I18n from "../../context/i18n/I18n";
//import {ShoppingCart } from "@material-ui/icons";
//import { Badge, IconButton } from "@mui/material";

const Header2 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //efecto navbar
  //const [scrolled, setScrolled] = useState(false);


  //metodos scroll. Funciona ok
  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleNavClose = () => {
    setIsNavExpanded(false); // Cierra el menú al hacer clic en una opción
    window.scrollTo(0, 0);
  };

  return (
    
    <Navbar
      //className={`navbar ${scrolled ? "scrolled" : "transparent"}` }
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="xs"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt={logo} />
          {/* <img src={navidad} className="logo" alt={navidad} className="tree" /> */}
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNavToggle}>
          {isNavExpanded ? (
            <i className="fa fa-times"></i> // Muestra la "X" o el aspa cuando está desplegado
          ) : (
            <i className="fa fa-bars"></i> // Muestra el ícono de hamburguesa cuando está cerrado
          )}
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ml-auto" onClick={handleNavClose}>
            <Nav.Link
              as={Link}
              eventKey="0"
              to={"/"}
              className="text-white"
              // routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.home" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              eventKey="2"
              to={"/especialidades"}
              className="text-white"
              //routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.especialidades" />
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              href="https://www.google.com/maps/dir//C.+Juan+Loaisa,+2,+10600+Plasencia,+C%C3%A1ceres/@40.0382689,-6.1512699,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd3e178eca5fed05:0xf13018a0bffa0458!2m2!1d-6.08123!2d40.03829?entry=ttu"
              //routerLinkActive="active"
              className="text-white"
            >
              &nbsp;
              <FormattedMessage id="app.localizacion" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              eventKey="4"
              to={"/reservas"}
              className="text-white"
              //routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.reservas" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              eventKey="4"
              to={"/oferta_navidad"}
              className="text-white"
              //routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.ofertaNavidad" />
              &nbsp;
              <img src={nuevo} className="new" alt={nuevo} />
              {/* <FormattedMessage id="app.reservas" /> */}
            </Nav.Link>
            <NavDropdown
              title={
                <span className="text-white">
                  <FormattedMessage id="app.carta" />
                </span>
              }
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item as={Link} eventKey="5" to={"/cartaFood"}>
                <FormattedMessage id="app.carta" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="6" to={"/cartaCeliaca"}>
                <FormattedMessage id="app.celiaco" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="7" to={"/cartaVegetariana"}>
                <FormattedMessage id="app.vegetariana" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} eventKey="8" to={"/cartaCervezas"}>
                <FormattedMessage id="app.cerveza" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey="9" to={"/cartaVino"}>
                <FormattedMessage id="app.vino" />
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
             eventKey="6"
            >
              <I18n></I18n>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header2;
