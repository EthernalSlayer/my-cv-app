import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

function Apropos() {
  return (
    <Container className="bg-dark" fluid as="main">
      <Row className="justify-content-center">
        <Col md="auto" xs="auto">
          <Card
            bg="light"
            className="text-center"
            style={{
              borderRadius: "20px",
              margin: "5% 8% 8% 5%",
              boxShadow: "5px 10px 15px black",
            }}
            as="article"
          >
            <Card.Body>
              <Card.Title
                className="text-danger"
                style={{ fontWeight: "bold" }}
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
                tombé amoureux de la programation en découvrant le language
                python. Depuis le developpement est ma passion et cela fait
                plusieurs années que je voulais en faire mon métier. J'ai depuis
                découvert le developpement web et j'ai appris le html, le css et
                les bases du javascript en autodidacte. Maintenant me voila en
                formation à la wild code school où j'ai découvert react et node,
                qui n'ont fait que grandir mon intérêt pour le javascript qui
                est un language riche et passionnant. J'espère découvrir encore
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
