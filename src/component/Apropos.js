import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

function Apropos() {
  return (
    <Container className="bg-dark" fluid as="main">
      <Row className="justify-content-center">
        <Col md="auto" xs="auto" className="text-light">
          <Card
            bg="light"
            style={{
              width: "50rem",
              margin: "10% 0 10% 0",
            }}
            as="article"
          >
            <Card.Body>
              <Card.Title className="text-danger" as="h2">
                A PROPOS
              </Card.Title>
              <Card.Text className="text-dark" as="p">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Apropos;
