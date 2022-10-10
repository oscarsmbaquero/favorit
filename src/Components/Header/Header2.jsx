import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const header2 = () => {
  return (
   
      <Navbar bg="dark" variant={'dark'} expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Gastro Bar Favorite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to={'/'}><i class="fa-solid fa-house-user"></i>
            &nbsp;Home</Nav.Link>
            <Nav.Link  as={Link} to={'/gallery'}><i class="fa-solid fa-location-arrow"></i>
            &nbsp;Galería</Nav.Link>
            <Nav.Link  as={Link} to={'/location'}><i class="fa-solid fa-location-arrow"></i>
            &nbsp;Localización</Nav.Link>
            <Nav.Link  as={Link} to={'/contact'}><i class="fa-solid fa-bars"></i>
            &nbsp;Contacto</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i class="fa-solid fa-bars"></i>Menu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i class="fa-solid fa-archway"></i>
                Reservas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Vinos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default header2