import React from "react";
import {Container, Navbar, Nav, Offcanvas, Row, Col} from 'react-bootstrap/';

function Header() {
  return (
    <Navbar expand={false}>
        <Container fluid>
        <Navbar.Brand href="/">Joshua Clark</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
          >
            <Row>
              <Col>
                <Offcanvas.Body>
                  <Nav>
                      <Nav.Link href="">Home</Nav.Link>
                      <Nav.Link href="/tictactoe">Tictactoe</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Col>
            </Row>
          </Navbar.Offcanvas>
        </Container>
    </Navbar>
  );
}


export default Header;