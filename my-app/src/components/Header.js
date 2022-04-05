import React from "react";
import {Navbar, Nav, Offcanvas, Row, Col, Dropdown} from 'react-bootstrap/';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

function Header() {
  return (
    <Navbar variant="dark" expand={false} bg="primary">
        <Navbar.Brand href="../">Joshua Clark</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar"/>
          <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
          >
            <Row>
              <Col>
                <Offcanvas.Body>
                  <Nav>
                      <Nav.Link href="../"><h3>Home</h3></Nav.Link>
                      <Dropdown>
                        <DropdownToggle>Projects</DropdownToggle>
                        <DropdownMenu>
                          <Dropdown.Item><Nav.Link href="../">Ueat</Nav.Link></Dropdown.Item>
                        </DropdownMenu>
                      </Dropdown>
                  </Nav>
                </Offcanvas.Body>
              </Col>
            </Row>
        </Navbar.Offcanvas>
    </Navbar>
  );
}


export default Header;