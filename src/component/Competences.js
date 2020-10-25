import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

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

function Competences() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ paddingBottom: "5%" }}
    >
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <h1 style={{ marginTop: "2%" }}>COMPETENCES</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>LANGUAGES</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={html} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">HTML</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={css} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">CSS</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={js} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">JavaScript</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={python} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Python</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2 style={{ marginTop: "5%" }}>FRAMEWORK / LIBRARY</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={reactImg} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">React</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={node} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Node.JS</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={express1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Express.JS</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={bootstrap1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Bootstrap</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={styled1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Styled Components</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2 style={{ marginTop: "5%" }}>DATABASES</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={mysql} className="bg-secondary" />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">MySQL</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={mongo} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">MongoDB</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2 style={{ marginTop: "5%" }}>OUTILS</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={github} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Github</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={git1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Git</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={vscode1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">VScode</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={firebase1} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Firebase</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce left>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={postman} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Postman</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2 style={{ marginTop: "5%" }}>DESIGN</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={figma} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Figma</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
        <Col md="2" xs="6">
          <Bounce right>
            <Card
              className="text-center"
              style={{ boxShadow: "5px 10px 15px black", marginTop: "8%" }}
            >
              <Card.Img variant="top" src={mockflow} />
              <Card.Body style={{ padding: 0 }}>
                <Card.Text as="h5">Mockflow</Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
}

export default Competences;
