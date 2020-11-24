import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import avatar from "../assets/avatar.png";

import evolution from "../assets/hixs-evolution.png";

const SubTitle = styled.h2`
  text-shadow: 1px 1px 2px black;
`;

const Title = styled.h1`
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
              boxShadow: "0px 0px 5px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto" className="text-center">
          <Title className="text-light" style={{ marginTop: "5%" }}>
            <span>GUILLAUME</span> <span>BENTO AIRES</span>
          </Title>
        </Col>
      </Row>
      <Row className="justify-content-center" as="section">
        <Col md="auto" xs="auto" className="text-center">
          <SubTitle className="text-danger">
            <span>Développeur</span> <span>Web</span> <span>React/Node.js</span>
          </SubTitle>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
