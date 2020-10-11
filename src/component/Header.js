import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";

function Header() {
  return (
    <Navbar
      bg="danger"
      variant="dark"
      expand="md"
      as="header"
      style={{ boxShadow: "0 5px 15px black" }}
    >
      <Navbar.Brand href="/">
        <ImHome style={{ marginBottom: "5px" }} /> GUILLAUME B.A.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" defaultActiveKey="/">
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <Nav.Link href="/" as="div">
              ACCUEIL
            </Nav.Link>
          </NavLink>
          <NavLink to="/a-propos" style={{ textDecoration: "none" }}>
            <Nav.Link href="/a-propos" as="div">
              A PROPOS
            </Nav.Link>
          </NavLink>
          <NavLink to="/competences" style={{ textDecoration: "none" }}>
            <Nav.Link href="/competences" as="div">
              COMPETENCES
            </Nav.Link>
          </NavLink>
          <NavLink to="/portofolio" style={{ textDecoration: "none" }}>
            <Nav.Link href="/portofolio" as="div">
              PORTOFOLIO
            </Nav.Link>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
