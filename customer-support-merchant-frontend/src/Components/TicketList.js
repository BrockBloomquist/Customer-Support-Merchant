import { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./CSS/Ticket.css";
import TicketView from "./TicketView";
import ListGroup from "react-bootstrap/ListGroup";

export default function TicketList() {
  const url = "http://localhost:3005/tickets";
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [radioValue, setRadioValue] = useState(0);
  const [ticket, setTicket] = useState(false);
  function handleSelected(e, idx) {
    setRadioValue(e.currentTarget.value);
    setIsSelected(true);
    setTicket(tickets[idx]);
  }
  useEffect(() => {
    async function getTicketList() {
      setIsSelected(false);
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
  useEffect(() => {
    setTicket(tickets[radioValue - 1]);
  }, [radioValue]);

  return (
    <>
      <Container
        className="ticket-list-container"
        style={{
          height: "100%",
        }}
      >
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
          <ListGroup className="list-group-ticketlist">
            <ButtonGroup
              style={{
                flexDirection: "column",
                position: "absolute",
              }}
            >
              {tickets.map((t, idx) => (
                <ToggleButton
                  variant="light"
                  id={`radio-${idx}`}
                  key={idx}
                  value={idx + 1}
                  checked={radioValue == idx + 1}
                  className="ticket-card-btn"
                  type="radio"
                  onChange={(e) => handleSelected(e, idx)}
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
            </ButtonGroup>
          </ListGroup>
        )}
      </Container>
      <TicketView t={ticket} isSelected={isSelected} />
    </>
  );
}
