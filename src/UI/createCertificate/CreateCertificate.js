import React, { useRef, useState } from "react";
import { Navbar, Container, Form, Button, Spinner } from "react-bootstrap";
import classes from "./CreateCertificate.module.css";
import db from "../../logic/firebase/firebase";
import Portal from "react-portal/lib/Portal";
import { useHistory, useLocation } from "react-router";

export default function CreateCertificate() {
  const certnameRef = useRef();
  const winnernameRef = useRef();
  const winnerpublicRef = useRef();

  const history = useHistory();

  const [isLoading, setisLoading] = useState(false);

  const location = useLocation();

  let competitionId;
  let competitionName;

  if (location.state) {
    competitionId = location.state.competitionId;
    competitionName = location.state.competitionName;
  }else{
    competitionId = location.pathname.split("/")[2];
    competitionName = "";
  }

  const submitForm = async (e) => {
    e.preventDefault();
    setisLoading(true);
    console.log(certnameRef);
    const certname = certnameRef.current.value;
    const winnername = winnernameRef.current.value;
    const winnerwallet = winnerpublicRef.current.value;
    await db
      .ref(`competitions_info/${competitionId}/certificates`)
      .push({
        certname: certname,
        winnername: winnername,
        winnerwallet: winnerwallet,
        competition: competitionId,
      })
      .catch(alert);
    setisLoading(false);
    history.replace("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{competitionName} Competition Certificate</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Form onSubmit={submitForm} className={classes.form}>
          <Form.Group className="mb-3" controlId="formCertName">
            <Form.Label>Certificate Name</Form.Label>
            <Form.Control
              ref={certnameRef}
              type="text"
              placeholder="Enter certificate name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWinnerName">
            <Form.Label>Winner Name</Form.Label>
            <Form.Control
              ref={winnernameRef}
              type="text"
              placeholder="Enter winner name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWinnerAddress">
            <Form.Label>Winner Wallet Public Address</Form.Label>
            <Form.Control
              ref={winnerpublicRef}
              type="text"
              placeholder="Enter winner wallet addresss"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Transfer
          </Button>
        </Form>
      </Container>
      <Portal node={document && document.getElementById("loader")}>
        {isLoading && (
          <div className="loader-context dark">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Portal>
    </div>
  );
}
