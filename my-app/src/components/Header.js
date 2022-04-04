import React from "react";
import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap/';

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
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="/tictactoe">Tictactoe</Nav.Link>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
  );
}


export default Header;