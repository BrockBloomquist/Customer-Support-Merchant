import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function TicketView({ t }) {
  function test() {
    console.log(t.id);
    console.log(t.email);
  }
  return (
    <>
      <Container className="Ticket">
        <Col>
          <Row>
            <h1>Full Name: {t.fullName}</h1>
          </Row>
        </Col>
      </Container>
    </>
  );
}
