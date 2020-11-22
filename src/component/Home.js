import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import avatar from "../assets/avatar.png";

import evolution from "../assets/hixs-evolution.png";

const AkaName = styled.h3`
  font-family: "Gugi", cursive;
  font-size: 1.7em;
  text-shadow: 1px 1px 2px black;
`;

const Title = styled.h1`
  font-family: "Turret Road", cursive;
  text-shadow: 2px 2px 1px red;
`;

function Home() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{
        padding: "50px",
        minHeight: "85vh",
        backgroundImage: `url(${evolution})`,
      }}
    >
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
          <AkaName className="text-danger">(aka EthernalSlayer)</AkaName>
        </Col>
      </Row>
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto">
          <Title className="text-light">DEVELOPPEUR</Title>
        </Col>
        <Col md="auto" xs="auto">
          <Title className="text-light">WEB</Title>
        </Col>
        <Col md="auto" xs="auto">
          <Title className="text-light">REACT/NODE.JS</Title>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
