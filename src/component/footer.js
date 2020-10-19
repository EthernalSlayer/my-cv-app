import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { GiPirateSkull } from "react-icons/gi";

function Footer() {
  return (
    <Container className="bg-danger" fluid as="footer">
      <Row>
        <Col md="6" xs="12" className="text-light text-center">
          <h3>Retrouver Moi</h3>
          <a
            href="https://github.com/EthernalSlayer"
            title="mon compte github"
            target="_blank"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <h6>
              <ImGithub style={{ marginBottom: "5px" }} /> EthernalSlayer
            </h6>
          </a>
          <a
            href="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3"
            title="mon compte github"
            target="_blank"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <h6>
              <ImLinkedin style={{ marginBottom: "5px" }} /> Guillaume BENTO
              AIRES
            </h6>
          </a>
        </Col>
        <Col md="6" xs="12" className="text-light text-center">
          <h3>Information</h3>
          <h6>
            Made with <FaReact />
          </h6>
          <h6>By</h6>
          <h4>
            <GiPirateSkull /> Ethernal Slayer <GiPirateSkull />
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
