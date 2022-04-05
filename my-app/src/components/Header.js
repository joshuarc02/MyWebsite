import React from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap/';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="primary">
    <Container fluid>
        <Navbar.Brand href="../">Joshua Clark</Navbar.Brand>
        <Navbar.Toggle collapsed aria-controls="navbarColor01" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></Navbar.Toggle>
          <NavbarCollapse id="navbarColor01">
            <Nav.Item>
              <Nav.Link className="text-light" href="../">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title={<span className="text-white">Projects</span>}>
                <NavDropdown.Item>
                  <Nav.Link href="../">Ueat</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </NavbarCollapse>
    </Container>
    </Navbar>
  );
}


export default Header;