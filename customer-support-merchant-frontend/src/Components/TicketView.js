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
      <Container className="ticket-view-container">
        <h1>Ticket View</h1>
        <Col>
          <Row>
            <h2>Full Name: {t.fullName}</h2>
          </Row>
        </Col>
      </Container>
    </>
  );
}
