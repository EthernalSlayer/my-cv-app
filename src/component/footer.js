import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <Container
      className="bg-danger"
      fluid
      as="footer"
      style={{ boxShadow: "0px 0px 5px 4px rgba(0, 0, 0, 0.5)" }}
    >
      <Row>
        <Col md="6" xs="12" className="text-light text-center">
          <h4>Retrouvez Moi</h4>
          <a
            href="https://github.com/EthernalSlayer"
            title="mon compte github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <p style={{ padding: 0, margin: 0 }}>
              <ImGithub style={{ marginBottom: "5px" }} /> EthernalSlayer
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3"
            title="mon compte github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <p style={{ padding: 0, margin: 0 }}>
              <ImLinkedin style={{ marginBottom: "5px" }} /> Guillaume BENTO
              AIRES
            </p>
          </a>
        </Col>
        <Col md="6" xs="12" className="text-light text-center">
          <h4>Information</h4>
          <p style={{ padding: 0, margin: 0 }}>
            Made with <FaReact />
          </p>
          <p style={{ padding: 0, margin: 0 }}>by EthernalSlayer</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
