import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import styled from "styled-components";

import evolution from "../assets/hixs-evolution.png";

const Title = styled.h1`
  margin-top: 2%;
  text-shadow: 2px 2px 1px red;
`;

function Apropos() {
  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ minHeight: "85vh", backgroundImage: `url(${evolution})` }}
    >
      <Row className="justify-content-center">
        <Col className="text-center text-light">
          <Title>A PROPOS</Title>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="10" xs="12">
          <Card
            bg="light"
            style={{
              borderRadius: "20px",
              marginTop: "5%",
              marginBottom: "5%",
              boxShadow: "0px 0px 5px 4px rgba(0, 0, 0, 0.5)",
            }}
            as="article"
          >
            <Card.Body style={{ padding: "50px" }}>
              <Card.Text className="text-dark" as="p">
                <bold style={{ fontWeight: "bold" }}>
                  Intéressé depuis l'enfance par le monde du numérique
                </bold>
                , je suis tombé amoureux de la programmation en découvrant le
                langage python. Depuis le développement est ma passion et cela
                fait plusieurs années que je veux en faire mon métier. Cela m'a
                fait découvrir les bases du développement web le html, le css et
                le vanilla javascript.
              </Card.Text>
              <Card.Text>
                Ma formation à la{" "}
                <a
                  href="https://www.wildcodeschool.com/fr-FR"
                  title="la wild code school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-danger"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Wild Code School
                </a>{" "}
                m'a fait découvrir{" "}
                <bold style={{ fontWeight: "bold" }}>
                  React, Node, bootstrap, styled-components, MySQL, MongoDB
                </bold>{" "}
                et plein d'autres outils fabuleux. Cela m'a permis de
                perfectionner les bases que j'avais acquis en autodidacte et
                confirmer mon appétence pour le code.
              </Card.Text>
              <Card.Text>
                <bold style={{ fontWeight: "bold" }}>
                  J'ai l'intention de découvrir encore plein de nouveau
                  languages, framework, librairies et outils afin de continuer à
                  perfectionner mon art tel un samuraï qui jamais ne se lasse de
                  manier son katana.
                </bold>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Apropos;
