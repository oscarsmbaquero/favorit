import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../../assets/images/logoF.png";
import I18n from "../../context/i18n/I18n";
//import {ShoppingCart } from "@material-ui/icons";
//import { Badge, IconButton } from "@mui/material";

const Header2 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="xs" className="sticky-top ">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt={logo} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNavToggle}>
  {isNavExpanded ? (
    <i className="fa fa-times"></i> // Muestra la "X" o el aspa cuando está desplegado
  ) : (
    <i className="fa fa-bars"></i> // Muestra el ícono de hamburguesa cuando está cerrado
  )}
</Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link as={Link} eventKey="0" to={"/"} 
           // routerLinkActive="active"
           >
              &nbsp;
              <FormattedMessage id="app.home" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              eventKey="2"
              to={"/especialidades"}
              //routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.especialidades" />
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              href="https://www.google.com/maps/dir//C.+Juan+Loaisa,+2,+10600+Plasencia,+C%C3%A1ceres/@40.0382689,-6.1512699,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd3e178eca5fed05:0xf13018a0bffa0458!2m2!1d-6.08123!2d40.03829?entry=ttu"
              //routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.localizacion" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              eventKey="4"
              to={"/reservas"}
              //routerLinkActive="active"
            >
              &nbsp;
              <FormattedMessage id="app.reservas" />
            </Nav.Link>
            <NavDropdown
              title=<FormattedMessage id="app.carta" />
              id="basic-nav-dropdown"
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
            
            <Nav.Link>
               <I18n></I18n>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header2;
