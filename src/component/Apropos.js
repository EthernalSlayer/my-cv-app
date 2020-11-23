import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import evolution from "../assets/hixs-evolution.png";

function Apropos() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ minHeight: "85vh", backgroundImage: `url(${evolution})` }}
    >
      <Row className="justify-content-center">
        <Col md="10" xs="12">
          <Card
            bg="light"
            className="text-center"
            style={{
              borderRadius: "20px",
              marginTop: "5%",
              marginBottom: "5%",
              boxShadow: "5px 10px 15px black",
            }}
            as="article"
          >
            <Card.Body>
              <Card.Title
                className="text-danger"
                style={{
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px black",
                }}
                as="h2"
              >
                A PROPOS
              </Card.Title>
              <Card.Text
                className="text-dark"
                style={{ fontSize: "24px" }}
                as="p"
              >
                Passionné depuis l'enfance par le monde du numérique, je suis
                tombé amoureux de la programmation en découvrant le langage
                python. Depuis le développement est ma passion et cela fait
                plusieurs années que je voulais en faire mon métier. J'ai depuis
                découvert le développement web et j'ai appris le html, le css et
                les bases du javascript en autodidacte. Maintenant me voila en
                formation à la Wild Code School où j'ai découvert React et Node,
                qui n'ont fait que grandir mon intérêt pour le javascript qui
                est un langage riche et passionnant. J'espère découvrir encore
                plein de nouvelles choses et continuer de perfectionner mon art
                tel un samuraï qui jamais ne se lasse de manier son katana.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Apropos;
