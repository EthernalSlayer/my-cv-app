import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import styled from "styled-components";

import Bounce from "react-reveal/Bounce";

import js from "../assets/javascript1.jpg";
import html from "../assets/html1.png";
import css from "../assets/css1.png";
import python from "../assets/python1.jpg";
import reactImg from "../assets/react1.png";
import node from "../assets/node1.jpg";
import express1 from "../assets/express.png";
import bootstrap1 from "../assets/bootstrap.jpg";
import styled1 from "../assets/styledcomponents1.png";
import mysql from "../assets/mysql1.png";
import mongo from "../assets/mongo1.jpg";
import figma from "../assets/figma.png";
import mockflow from "../assets/mockflow1.jpg";
import github from "../assets/github1.jpg";
import git1 from "../assets/git2.jpg";
import vscode1 from "../assets/vscode1.png";
import firebase1 from "../assets/firebase1.png";
import postman from "../assets/postman1.png";

import evolution from "../assets/hixs-evolution.png";

const CategoryTitle = styled.h2`
  text-shadow: 1px 1px 2px black;
  margin-top: 5%;
`;

const Title = styled.h1`
  margin-top: 2%;
  text-shadow: 2px 2px 1px red;
`;

const CustomCard = styled(Card)`
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.5);
  margin-top: 8%;
`;

const languages = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: js, name: "JavaScript" },
  { img: python, name: "Python" },
];

const frameworks = [
  { img: reactImg, name: "React" },
  { img: node, name: "Node.JS" },
  { img: express1, name: "Express.JS" },
  { img: bootstrap1, name: "Bootstrap" },
  { img: styled1, name: "Styled Components" },
];

const databases = [
  { img: mysql, name: "MySQL" },
  { img: mongo, name: "MongoDB" },
];

const tools = [
  { img: github, name: "Github" },
  { img: git1, name: "Git" },
  { img: vscode1, name: "VScode" },
  { img: firebase1, name: "Firebase" },
  { img: postman, name: "Postman" },
];

const designs = [
  { img: figma, name: "Figma" },
  { img: mockflow, name: "Mockflow" },
];

function Competences() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ paddingBottom: "5%", backgroundImage: `url(${evolution})` }}
    >
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <Title>COMPETENCES</Title>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Languages</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {languages.map((language) => (
          <Col md="2" xs="6">
            <Bounce right>
              <CustomCard className="text-center">
                <Card.Img variant="top" src={language.img} />
                <Card.Body style={{ padding: 0 }}>
                  <Card.Text as="p">{language.name}</Card.Text>
                </Card.Body>
              </CustomCard>
            </Bounce>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Framework / Library</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {frameworks.map((framework) => (
          <Col md="2" xs="6">
            <Bounce left>
              <CustomCard className="text-center">
                <Card.Img variant="top" src={framework.img} />
                <Card.Body style={{ padding: 0 }}>
                  <Card.Text as="p">{framework.name}</Card.Text>
                </Card.Body>
              </CustomCard>
            </Bounce>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Databases</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {databases.map((database) => (
          <Col md="2" xs="6">
            <Bounce right>
              <CustomCard className="text-center">
                <Card.Img
                  variant="top"
                  src={database.img}
                  className="bg-secondary"
                />
                <Card.Body style={{ padding: 0 }}>
                  <Card.Text as="p">{database.name}</Card.Text>
                </Card.Body>
              </CustomCard>
            </Bounce>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Outils</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {tools.map((tool) => (
          <Col md="2" xs="6">
            <Bounce left>
              <CustomCard className="text-center">
                <Card.Img variant="top" src={tool.img} />
                <Card.Body style={{ padding: 0 }}>
                  <Card.Text as="p">{tool.name}</Card.Text>
                </Card.Body>
              </CustomCard>
            </Bounce>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Design</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {designs.map((design) => (
          <Col md="2" xs="6">
            <Bounce right>
              <CustomCard className="text-center">
                <Card.Img variant="top" src={design.img} />
                <Card.Body style={{ padding: 0 }}>
                  <Card.Text as="p">{design.name}</Card.Text>
                </Card.Body>
              </CustomCard>
            </Bounce>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Competences;
