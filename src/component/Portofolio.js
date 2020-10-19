import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import quizgrenier from "../assets/quizdugrenier.png";
import todolist from "../assets/todolist.png";
import hackfornoob from "../assets/hackfornoob.png";
import marvelquiz from "../assets/marvelquiz.png";
import gamovore from "../assets/gamovore.png";

function Portofolio() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ paddingBottom: "5%" }}
    >
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <h1 style={{ marginTop: "2%" }}>PORTOFOLIO</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>MY PROJECTS</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" xs="12">
          <Card
            className="bg-dark text-white text-center"
            style={{ marginTop: "5%", boxShadow: "5px 10px 15px black" }}
          >
            <Card.Img
              src={quizgrenier}
              alt="écran d'accueil du site quiz du grenier"
            />
            <Card.ImgOverlay style={{ top: "auto", bottom: 0, padding: 0 }}>
              <Card.Text
                style={{
                  margin: 0,
                  backgroundColor: "black",
                  opacity: 0.8,
                }}
              >
                Wild Code School projet 1, réaliser pour acquérir les bases du
                html, css et javascript.
              </Card.Text>
              <Card.Text className="bg-danger">
                <h4 style={{ margin: 0 }}>Le Quiz Du Grenier</h4>
                <p style={{ margin: 0 }}>Juin 2020</p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md="4" xs="12">
          <Card
            className="bg-dark text-white text-center"
            style={{ marginTop: "5%", boxShadow: "5px 10px 15px black" }}
          >
            <Card.Img src={todolist} alt="vue global de ma todo list app" />
            <Card.ImgOverlay style={{ top: "auto", bottom: 0, padding: 0 }}>
              <Card.Text
                style={{
                  margin: 0,
                  backgroundColor: "black",
                  opacity: 0.8,
                }}
              >
                Mon premier projet réaliser en React.
              </Card.Text>
              <Card.Text className="bg-danger">
                <h4 style={{ margin: 0 }}>React Todo List</h4>
                <p style={{ margin: 0 }}>Juin 2020</p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md="4" xs="12">
          <Card
            className="bg-dark text-white text-center"
            style={{ marginTop: "5%", boxShadow: "5px 10px 15px black" }}
          >
            <Card.Img
              src={hackfornoob}
              alt="page d'accueil du site hack for noob"
            />
            <Card.ImgOverlay style={{ top: "auto", bottom: 0, padding: 0 }}>
              <Card.Text
                style={{
                  margin: 0,
                  backgroundColor: "black",
                  opacity: 0.8,
                }}
              >
                Projet React réaliser dans le cadre d'une présentation sur la
                cyber sécuriter
              </Card.Text>
              <Card.Text className="bg-danger">
                <h4 style={{ margin: 0 }}>Hack For Noob</h4>
                <p style={{ margin: 0 }}>Juillet 2020</p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md="4" xs="12">
          <Card
            className="bg-dark text-white text-center"
            style={{ marginTop: "5%", boxShadow: "5px 10px 15px black" }}
          >
            <Card.Img
              src={marvelquiz}
              alt="écran de connexion du site marvel quiz"
            />
            <Card.ImgOverlay style={{ top: "auto", bottom: 0, padding: 0 }}>
              <Card.Text
                style={{
                  margin: 0,
                  backgroundColor: "black",
                  opacity: 0.8,
                }}
              >
                Projet React réaliser pour découvrir firebase
              </Card.Text>
              <Card.Text className="bg-danger">
                <h4 style={{ margin: 0 }}>Marvel Quiz</h4>
                <p style={{ margin: 0 }}>Août 2020</p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md="4" xs="12">
          <Card
            className="bg-dark text-white text-center"
            style={{ marginTop: "5%", boxShadow: "5px 10px 15px black" }}
          >
            <Card.Img
              src={gamovore}
              alt="écran de la game liste page du site gamovore"
            />
            <Card.ImgOverlay style={{ top: "auto", bottom: 0, padding: 0 }}>
              <Card.Text
                style={{
                  margin: 0,
                  backgroundColor: "black",
                  opacity: 0.8,
                }}
              >
                Wild Code School projet 2 création d'un site de mise en relation
                de gamers
              </Card.Text>
              <Card.Text className="bg-danger">
                <h4 style={{ margin: 0 }}>Gamovore</h4>
                <p style={{ margin: 0 }}>Juillet-Août 2020</p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portofolio;
