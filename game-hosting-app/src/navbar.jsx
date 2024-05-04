import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

export default function NavFunc() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
      
        <Navbar.Brand href="/">Cam's Arcade</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/Games">Games</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

 {/* <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://localhost:5500/redDot">RED DOT</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:5500/blackjack">BLACKJACK</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:5500/snake">SNAKE</NavDropdown.Item>
            
            </NavDropdown>*/}