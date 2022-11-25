import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../../assets/images/logoFavorit.jpeg";
import {ShoppingCart } from "@material-ui/icons";
import { Badge, IconButton } from "@mui/material";

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
            {/* <Nav.Link as={Link} to={"/"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-house"></i>
              &nbsp;INICIO
            </Nav.Link> */}
            <Nav.Link as={Link} to={"/"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-image"></i>
              &nbsp;GALERÍA
            </Nav.Link>
            <Nav.Link as={Link} to={"/especialidades"} routerLinkActive="active">
            <i class="fa-solid fa-utensils"></i>
              &nbsp;ESPECIALIDADES
            </Nav.Link>
            <Nav.Link as={Link} to={"/location"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              &nbsp;LOCALIZACIÓN
            </Nav.Link>
            <Nav.Link as={Link} to={"/reservas"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-address-book"></i>
              &nbsp;RESERVAS
            </Nav.Link>
            <Nav.Link as={Link} to={"/horario"} routerLinkActive="active">
            <i class="fa-regular fa-clock"></i>
              &nbsp;HORARIO
            </Nav.Link>
            {/* <Nav.Link as={Link} to={"/pedidos"} routerLinkActive="active">
            <i class="fa-solid fa-bag-shopping"></i>
              &nbsp;Pedidos
            </Nav.Link> */}
            <NavDropdown title="CARTAS" id="basic-nav-dropdown"> 
              <NavDropdown.Item href="/cartaFood"><i class="fa-solid fa-utensils">&nbsp;</i>Carta</NavDropdown.Item>
              <NavDropdown.Item href="/cartaCeliaca"><i class="fa-solid fa-utensils">&nbsp;</i>Celíaca</NavDropdown.Item>
              <NavDropdown.Item href="/cartaVegetariana"><i class="fa-solid fa-utensils">&nbsp;</i>Vegetariana</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cartaCervezas"><i class="fa-solid fa-beer-mug-empty">&nbsp;</i>Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="/cartaVino"><i class="fa-solid fa-wine-glass-empty">&nbsp;</i>Vinos</NavDropdown.Item>
            </NavDropdown>
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
