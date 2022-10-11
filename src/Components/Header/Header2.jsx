import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from "../../assets/images/logo.png"

const header2 = () => {
  return (
   
      <Navbar collapseOnSelect bg="dark" variant='dark' expand="md" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className='logo'  alt={logo}/>𝔊𝔞𝔰𝔱𝔯𝔬 𝔅𝔞𝔯  𝔉𝔞𝔳𝔬𝔯𝔦𝔱𝔢</Navbar.Brand>
        {/* <Navbar.Brand><img src={logo} className='logo'  alt={logo}/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ><i class="fa-sharp fa-solid fa-bars"></i></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link  as={Link} to={'/'}><i class="fa-sharp fa-solid fa-house"></i>
            &nbsp;Home</Nav.Link>
            <Nav.Link  as={Link} to={'/gallery'}><i class="fa-sharp fa-solid fa-image"></i>
            &nbsp;Galería</Nav.Link>
            <Nav.Link  as={Link} to={'/location'}><i class="fa-sharp fa-solid fa-location-dot"></i>
            &nbsp;Localización</Nav.Link>
            <Nav.Link  as={Link} to={'/contact'}><i class="fa-sharp fa-solid fa-address-book"></i>
            &nbsp;Contacto</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Menu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
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