import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import homeIcon from "../home.svg";

function Header() {
  return (
    <Navbar bg="info" variant="dark" expand="md">
      <Navbar.Brand href="/">
        <img
          src={homeIcon}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        GUILLAUME B.A.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="/">ACCUEIL</Nav.Link>
          <Nav.Link href="/a-propos">A PROPOS</Nav.Link>
          <Nav.Link href="/competences">COMPETENCES</Nav.Link>
          <Nav.Link href="/portofolio">PORTOFOLIO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
