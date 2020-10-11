import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "../avatar.png";

function Home() {
  return (
    <Container className="bg-dark" fluid as="main">
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto">
          <Image
            src={avatar}
            roundedCircle
            style={{
              marginTop: "15%",
              boxShadow: "10px 10px 15px black",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto">
          <h2 className="text-muted" style={{ marginTop: "5%" }}>
            GUILLAUME
          </h2>
        </Col>
        <Col md="auto" xs="auto">
          <h2 className="text-muted" style={{ marginTop: "5%" }}>
            BENTO AIRES
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto">
          <h3 className="text-danger">(aka EthernalSlayer)</h3>
        </Col>
      </Row>
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto">
          <h1 className="text-light" style={{ fontWeight: "bold" }}>
            DEVELOPPEUR
          </h1>
        </Col>
        <Col md="auto" xs="auto">
          <h1 className="text-light" style={{ fontWeight: "bold" }}>
            WEB
          </h1>
        </Col>
        <Col md="auto" xs="auto">
          <h1
            className="text-light"
            style={{ fontWeight: "bold", marginBottom: "10%" }}
          >
            REACT/NODE.JS
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
