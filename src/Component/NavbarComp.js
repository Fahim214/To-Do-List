import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Row,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComp = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else{
        setNavbar(false)
    }
  };

  window.addEventListener("scroll", changeBackground)

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar fixed="top" expand="lg" className={ navbar ? 'navv text-white' : 'bg-transparent'}>
              <Container>
                <NavbarBrand>To-Do List</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/detail">
                      <Nav.Link>Detail</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarComp;
