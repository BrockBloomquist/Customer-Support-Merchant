import { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./CSS/TicketList.css";

export default function TicketList() {
  const url = "http://localhost:3005/tickets";
  const [isLoading, setIsLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [radioValue, setRadioValue] = useState(0);
  const [ticket, setTicket] = useState(false);
  function handleSelected(e, idx) {
    setRadioValue(e.currentTarget.value);
  }
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
          // eslint-disable-next-line
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
      <Container className="ticket-list-container">
        {isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="container-spinner"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!isLoading && (
          <Col>
            <ButtonGroup
              style={{
                flexDirection: "column",
              }}
            >
              <Row>
                {tickets.map((t, idx) => (
                  <ToggleButton
                    variant="light"
                    id={`radio-${idx}`}
                    key={idx}
                    value={idx + 1}
                    checked={radioValue == idx + 1}
                    className="ticket-card-btn"
                    type="radio"
                    onChange={(e) => handleSelected(e, idx + 1)}
                  >
                    <TicketCard
                      key={idx}
                      id={t.id}
                      name={t.fullName}
                      email={t.email}
                      description={t.description}
                      type={t.type}
                      date={t.date}
                    />
                  </ToggleButton>
                ))}
              </Row>
            </ButtonGroup>
          </Col>
        )}
      </Container>
    </>
  );
}
