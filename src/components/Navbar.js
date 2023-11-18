import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarC() {
  return (
    <Navbar expand="lg" className="bg-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Cine Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic.navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="infoequipo">Información del Equipo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
