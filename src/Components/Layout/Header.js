import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <Navbar className="header" variant="dark" expand="md" fixed="top">
        <Navbar.Brand href="/">Daniel Pisterzi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item eventKey={1}>
              <Nav.Link as={Link} className="item" to="/about">
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey={2}>
              <Nav.Link className="item" to="/portfolio" as={Link}>
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey={3}>
              <Nav.Link className="item" to="/experience" as={Link}>
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey={4}>
              <Nav.Link className="item" to="/contact" as={Link}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
