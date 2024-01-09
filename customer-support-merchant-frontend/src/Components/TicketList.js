import { useEffect } from "react";
import TicketCard from "./TicketCard";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CSS/TicketList.css";

export default function TicketList() {
  const url = "http://localhost:3005/tickets";
  const [isLoading, setIsLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [ticket, setTicket] = useState(false);
  useEffect(() => {
    async function getTicketList() {
      setTickets([]);
      setTicket(false);
      setIsLoading(true);
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          json.map((t) => {
            const tempTicket = {
              id: t.id,
              fullName: t.fullName,
              email: t.email,
              description: t.details,
              type: t.ticketType,
              date: t.created,
            };
            setTicket(tempTicket);
            setTickets((tickets) => [...tickets, tempTicket]);
          });
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getTicketList();
  }, []);

  return (
    <>
      <Container
        style={{
          justifyContent: "flex-start",
        }}
        className="ticket-list-container"
      >
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!isLoading && (
          <ul>
            <Col>
              {tickets.map((t) => (
                <Row
                  style={{
                    width: "400px",
                  }}
                >
                  <TicketCard id={t.id} name={t.fullName} email={t.email} />
                </Row>
              ))}
            </Col>
          </ul>
        )}
      </Container>
    </>
  );
}
