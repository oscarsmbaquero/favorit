import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../../assets/images/logoFavorit.jpeg";

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
              &nbsp;Inicio
            </Nav.Link>
            <Nav.Link as={Link} to={"/gallery"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-image"></i>
              &nbsp;Galería
            </Nav.Link>
            <Nav.Link as={Link} to={"/especialidades"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-image"></i>
              &nbsp;Especialidades
            </Nav.Link>
            <Nav.Link as={Link} to={"/location"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              &nbsp;Localización
            </Nav.Link>
            <Nav.Link as={Link} to={"/reservas"} routerLinkActive="active">
              <i class="fa-sharp fa-solid fa-address-book"></i>
              &nbsp;Reservas
            </Nav.Link>
            <Nav.Link as={Link} to={"/horario"} routerLinkActive="active">
            <i class="fa-regular fa-clock"></i>
              &nbsp;Horario
            </Nav.Link>
            {/* <Nav.Link as={Link} to={"/pedidos"} routerLinkActive="active">
            <i class="fa-solid fa-bag-shopping"></i>
              &nbsp;Pedidos
            </Nav.Link> */}
            <NavDropdown title="Cartas" id="basic-nav-dropdown"> 
              <NavDropdown.Item href="/cartaFood"><i class="fa-solid fa-utensils">&nbsp;</i>Carta</NavDropdown.Item>
              <NavDropdown.Item href="/cartaCeliaca"><i class="fa-solid fa-utensils">&nbsp;</i>Celíaca</NavDropdown.Item>
              <NavDropdown.Item href="/cartaVegetariana"><i class="fa-solid fa-utensils">&nbsp;</i>Vegetariana</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cartaCervezas"><i class="fa-solid fa-beer-mug-empty">&nbsp;</i>Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><i class="fa-solid fa-wine-glass-empty">&nbsp;</i>Vinos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header2;
