import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Contact() {
  const data = {
    email: "",
    nom: "",
    prenom: "",
    objet: "",
    message: "",
  };

  const [mail, setMail] = useState(data);

  const handleChange = (e) => {
    setMail({ ...mail, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail);
  };

  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ paddingBottom: "5%" }}
    >
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <h1 style={{ marginTop: "2%" }}>CONTACT</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="6" xs="12" className="text-light">
          <Form>
            <Form.Group controlId="email">
              <Form.Label>addresse mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@test.com"
                value={mail.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="nom"
                value={mail.nom}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="prenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="prénom"
                value={mail.prenom}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="objet">
              <Form.Label>Objet</Form.Label>
              <Form.Control
                type="text"
                placeholder="quel est l'objet de votre message ?"
                value={mail.objet}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={mail.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="danger" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
