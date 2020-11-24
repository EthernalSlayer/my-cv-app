import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import styled from "styled-components";

import quizgrenier from "../assets/quizdugrenier.png";
import todolist from "../assets/todolist.png";
import hackfornoob from "../assets/hackfornoob.png";
import marvelquiz from "../assets/marvelquiz.png";
import gamovore from "../assets/gamovore.png";
import roomChat from "../assets/roomChat.png";

import evolution from "../assets/hixs-evolution.png";

const CategoryTitle = styled.h2`
  text-shadow: 1px 1px 2px black;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-top: 2%;
  text-shadow: 2px 2px 1px red;
`;

const CardOverlay = styled(Card.ImgOverlay)`
  opacity: 0;
  &:hover {
    opacity: 0.8;
    top: 0;
    bottom: 0;
    padding: 0;
  }
`;

const CardTitle = styled(Card.Text)`
  height: 30%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const CardText = styled(Card.Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  margin: 0;
  background-color: black;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const CustomCard = styled(Card)`
  margin-top: 50px;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

function Portofolio() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ paddingBottom: "5%", backgroundImage: `url(${evolution})` }}
    >
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <Title>PORTOFOLIO</Title>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>MY PROJECTS</CategoryTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" xs="12">
          <a
            href="https://wildcodeschool.github.io/Lyon-js-202005-project-quizz"
            title="le project quiz grenier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomCard className="bg-dark text-white text-center">
              <Card.Img
                src={quizgrenier}
                alt="écran d'accueil du site quiz du grenier"
              />
              <CardOverlay>
                <CardText>
                  <span>
                    Wild Code School projet 1, réalisé pour acquérir les bases
                    du html, css et javascript.
                  </span>
                </CardText>
                <CardTitle className="bg-danger" as="div">
                  <h4 style={{ margin: 0 }}>Le Quiz Du Grenier</h4>
                  <p style={{ margin: 0 }}>Juin 2020</p>
                </CardTitle>
              </CardOverlay>
            </CustomCard>
          </a>
        </Col>
        <Col md="4" xs="12">
          <a
            href="https://ethernalslayer.github.io/todo-list-app"
            title="ma première todolist en react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomCard className="bg-dark text-white text-center">
              <Card.Img src={todolist} alt="vue global de ma todo list app" />
              <CardOverlay>
                <CardText>Mon premier projet réalisé en React.</CardText>
                <CardTitle className="bg-danger" as="div">
                  <h4 style={{ margin: 0 }}>React Todo List</h4>
                  <p style={{ margin: 0 }}>Juin 2020</p>
                </CardTitle>
              </CardOverlay>
            </CustomCard>
          </a>
        </Col>
        <Col md="4" xs="12">
          <a
            href="https://hack-for-noob.netlify.app"
            title="le project hack for noob"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomCard className="bg-dark text-white text-center">
              <Card.Img
                src={hackfornoob}
                alt="page d'accueil du site hack for noob"
              />
              <CardOverlay>
                <CardText>
                  Projet React réalisé dans le cadre d'une présentation sur la
                  cyber sécurité
                </CardText>
                <CardTitle className="bg-danger" as="div">
                  <h4 style={{ margin: 0 }}>Hack For Noob</h4>
                  <p style={{ margin: 0 }}>Juillet 2020</p>
                </CardTitle>
              </CardOverlay>
            </CustomCard>
          </a>
        </Col>
        <Col md="4" xs="12">
          <a
            href="https://marvel-quiz-20908.firebaseapp.com"
            title="le project marvel quiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomCard className="bg-dark text-white text-center">
              <Card.Img
                src={marvelquiz}
                alt="écran de connexion du site marvel quiz"
              />
              <CardOverlay>
                <CardText>
                  Projet React réalisé pour découvrir firebase
                </CardText>
                <CardTitle className="bg-danger" as="div">
                  <h4 style={{ margin: 0 }}>Marvel Quiz</h4>
                  <p style={{ margin: 0 }}>Août 2020</p>
                </CardTitle>
              </CardOverlay>
            </CustomCard>
          </a>
        </Col>
        <Col md="4" xs="12">
          <a
            href="https://gamovore.netlify.app"
            title="le project gamovore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomCard className="bg-dark text-white text-center">
              <Card.Img
                src={gamovore}
                alt="écran de la game liste page du site gamovore"
              />
              <CardOverlay>
                <CardText>
                  Wild Code School projet 2 création d'un site de mise en
                  relation de gamers
                </CardText>
                <CardTitle className="bg-danger" as="div">
                  <h4 style={{ margin: 0 }}>Gamovore</h4>
                  <p style={{ margin: 0 }}>Juillet-Août 2020</p>
                </CardTitle>
              </CardOverlay>
            </CustomCard>
          </a>
        </Col>
        <Col md="4" xs="12">
          <a
            href="https://www.chat.ethernalslayer.com"
            title="le projet room chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomCard className="bg-dark text-white text-center">
              <Card.Img src={roomChat} alt="écran d'une room du chat" />
              <CardOverlay>
                <CardText>
                  Un petit chat avec système de room pour découvrir socket.io et
                  le déploiement sur serveur vps
                </CardText>
                <CardTitle className="bg-danger" as="div">
                  <h4 style={{ margin: 0 }}>Room Chat</h4>
                  <p style={{ margin: 0 }}>novembre 2020</p>
                </CardTitle>
              </CardOverlay>
            </CustomCard>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Portofolio;
