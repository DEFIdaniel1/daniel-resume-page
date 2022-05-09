import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "./Header.scss";

const Header = () => {
  return (
    <Navbar className="header" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="/">Daniel Pisterzi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="item" href="/about">
              About Me
            </Nav.Link>
            <Nav.Link className="item" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="item" href="/experience">
              Experience
            </Nav.Link>
            {/* <Nav.Link className="item" href="/resume">
              Resume
            </Nav.Link> */}
            <Nav.Link className="item" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
