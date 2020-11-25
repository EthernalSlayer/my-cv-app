import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import evolution from "../assets/hixs-evolution.png";

const CategoryTitle = styled.h2`
  text-shadow: 1px 1px 2px black;
  margin-top: 5%;
`;

function Contact() {
  const data = {
    email: "",
    nom: "",
    prenom: "",
    objet: "",
    message: "",
  };

  const [mail, setMail] = useState(data);
  const [enable, setEnable] = useState("");

  useEffect(() => {
    if (Object.values(mail).includes("")) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [mail]);

  const handleChange = (e) => {
    setMail({ ...mail, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://ethernal-slayer-mailer.herokuapp.com/api/contact",
      data: mail,
    })
      .then((response) =>
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        })
      )
      .catch((error) => {
        if (Object.values(error)[2].data.errors !== undefined) {
          const errMsg = Object.values(error)[2].data.errors[0].msg;
          const errParam = Object.values(error)[2].data.errors[0].param;
          toast.error(`error: ${errMsg} on ${errParam}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        } else {
          toast.error("Trop de mails envoyer...", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      });
    setMail(data);
  };

  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{
        paddingBottom: "50px",
        minHeight: "85vh",
        backgroundImage: `url(${evolution})`,
      }}
    >
      <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <CategoryTitle>CONTACT ME</CategoryTitle>
        </Col>
      </Row>
      {/* <Row className="justify-content-center">
        <Col className="text-danger text-center">
          <h2>me contacter</h2>
        </Col>
      </Row> */}
      <Row className="justify-content-center">
        <Col md="6" xs="12" className="text-light">
          <Form>
            <Row className="justify-content-center">
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Adresse mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@test.com"
                    value={mail.email}
                    onChange={handleChange}
                    required
                    style={{ boxShadow: "inset 2px 2px 5px black" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="nom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="nom"
                    value={mail.nom}
                    onChange={handleChange}
                    required
                    style={{ boxShadow: "inset 2px 2px 5px black" }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="prenom">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="prénom"
                    value={mail.prenom}
                    onChange={handleChange}
                    required
                    style={{
                      boxShadow: "inset 2px 2px 5px black",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="objet">
              <Form.Label>Objet</Form.Label>
              <Form.Control
                type="text"
                placeholder="quel est l'objet de votre message ?"
                value={mail.objet}
                onChange={handleChange}
                required
                style={{
                  boxShadow: "inset 2px 2px 5px black",
                }}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={mail.message}
                onChange={handleChange}
                required
                style={{
                  boxShadow: "inset 2px 2px 5px black",
                }}
              />
            </Form.Group>
            {enable === false ? (
              <Button
                variant="danger"
                type="submit"
                onClick={handleSubmit}
                disabled
              >
                Envoyer
              </Button>
            ) : (
              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Envoyer
              </Button>
            )}
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Contact;
