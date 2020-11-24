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
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={html} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">HTML</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={css} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">CSS</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={js} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">JavaScript</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={python} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Python</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Framework / Library</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={reactImg} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">React</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={node} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Node.JS</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={express1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Express.JS</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={bootstrap1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Bootstrap</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={styled1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Styled Components</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Databases</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={mysql} className="bg-secondary" />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">MySQL</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={mongo} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">MongoDB</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Outils</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={github} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Github</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={git1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Git</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={vscode1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">VScode</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={firebase1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Firebase</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={postman} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Postman</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>Design</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={figma} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Figma</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <CustomCard className="text-center">
              <Card.Img variant="top" src={mockflow} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="p">Mockflow</Card.Text>
              </Card.Body>
            </CustomCard>
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
}

export default Competences;
