import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../../assets/images/logoFavorit.jpeg";
import I18n from "../../context/i18n/I18n";
//import {ShoppingCart } from "@material-ui/icons";
//import { Badge, IconButton } from "@mui/material";

const header2 = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt={logo} />
        </Navbar.Brand>
        {/* <Navbar.Brand><img src={logo} className='logo'  alt={logo}/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i class="fa-sharp fa-solid fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={"/"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-house"></i>
              &nbsp;
              <FormattedMessage id="app.home" />
            </Nav.Link>
            <Nav.Link as={Link} to={"/gallery"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-image"></i>
              &nbsp;
              <FormattedMessage id="app.gallery" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/especialidades"}
              routerLinkActive="active"
            >
              <i class="fa-solid fa-utensils"></i>
              &nbsp;
              <FormattedMessage id="app.especialidades" />
            </Nav.Link>
            <Nav.Link
              href="https://www.google.com/maps/dir/40.04365,-6.06593/gastro+bar+favorite/@40.0405937,-6.0837457,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd3e178eca5fed05:0xf13018a0bffa0458!2m2!1d-6.08123!2d40.03829"
              routerLinkActive="active"
            >
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              &nbsp;
              <FormattedMessage id="app.localizacion" />
            </Nav.Link>
            <Nav.Link as={Link} to={"/reservas"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-address-book"></i>
              &nbsp;
              <FormattedMessage id="app.reservas" />
            </Nav.Link>
            <Nav.Link as={Link} to={"/horario"} routerLinkActive="active">
              <i class="fa-regular fa-clock"></i>
              &nbsp;
              <FormattedMessage id="app.horario" />
            </Nav.Link>
            {/* <Nav.Link as={Link} to={"/pictures"} routerLinkActive="active">
            <i class="fa-regular fa-clock"></i>
              &nbsp;Pictures
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to={"/pedidos"} routerLinkActive="active">
            <i class="fa-solid fa-bag-shopping"></i>
              &nbsp;Pedidos
            </Nav.Link> */}
            <NavDropdown
              title=<FormattedMessage id="app.carta" />
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to={"/cartaFood"}>
                <i class="fa-solid fa-utensils">&nbsp;</i>
                <FormattedMessage id="app.carta" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/cartaCeliaca"}>
                <i class="fa-solid fa-utensils">&nbsp;</i>
                <FormattedMessage id="app.celiaco" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/cartaVegetariana"}>
                <i class="fa-solid fa-utensils">&nbsp;</i>
                <FormattedMessage id="app.vegetariana" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/cartaCervezas"}>
                <i class="fa-solid fa-beer-mug-empty">&nbsp;</i>
                <FormattedMessage id="app.cerveza" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/cartaVino"}>
                <i class="fa-solid fa-wine-glass-empty">&nbsp;</i>
                <FormattedMessage id="app.vino" />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/oferta_navidad"}
              routerLinkActive="active"
            >
              <i class="fa-solid fa-gift"></i>
              &nbsp;
              <FormattedMessage id="app.ofertaNavidad" />
            </Nav.Link>
            {/* <Nav.Link>
                  <I18n></I18n>
            </Nav.Link>   */}
            
            {/* <IconButton aria-label="show-items-shopping" color="inherit">
            <Badge badgeContent={2} color="success">
            <ShoppingCart fontSize="large"  color="primary"/>
            </Badge>
            </IconButton> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header2;
