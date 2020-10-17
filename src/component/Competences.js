import React from "react";
import { Col, Container, Row, Card, CardDeck } from "react-bootstrap";

import js from "../assets/javascript.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.jpg";
import reactImg from "../assets/react.png";
import node from "../assets/node.jpg";
import express1 from "../assets/express1.png";
import bootstrap1 from "../assets/bootstrap1.jpg";
import styled1 from "../assets/styledcomponents.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.jpg";
import figma from "../assets/figma1.png";
import mockflow from "../assets/mockflow.jpg";
import github from "../assets/github.jpg";
import git1 from "../assets/git.jpg";
import vscode1 from "../assets/vscode.png";
import firebase1 from "../assets/firebase.png";
import postman from "../assets/postman.png";

function Competences() {
  return (
    <Container className="bg-dark" fluid as="main">
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <h1>COMPETENCES</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>LANGUAGES</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={html} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">HTML</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={css} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">CSS</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={js} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">JavaScript</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={python} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Python</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>FRAMEWORK / LIBRARY</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={reactImg} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">React</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={node} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Node.JS</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={express1} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Express.JS</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={bootstrap1} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Bootstrap</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={styled1} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Styled Components</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>DATABASES</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={mysql} className="bg-secondary" />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">MySQL</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={mongo} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">MongoDB</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>OUTILS</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={github} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Github</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={git1} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Git</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={vscode1} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">VScode</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={firebase1} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Firebase</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={postman} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Postman</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>DESIGN</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={figma} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Figma</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2" xs="6">
          <Card className="text-center">
            <Card.Img variant="top" src={mockflow} />
            <Card.Body style={{ padding: 0 }}>
              <Card.Text as="h5">Mockflow</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Competences;
