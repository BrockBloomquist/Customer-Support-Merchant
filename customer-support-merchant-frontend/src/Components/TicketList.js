import { useEffect } from "react";
import TicketCard from "./TicketCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function TicketList() {
  const url = "http://localhost:3005/tickets";
  const [tickets, setTickets] = useState([]);
  const [ticket, setTicket] = useState({
    id: "",
    fullName: "",
    email: "",
    description: "",
    type: "",
    date: "",
  });
  useEffect(() => {
    getTicketList();
  }, []);
  function getTicketList() {
    fetch(url, {
      mehtod: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        setTicket({
          ticket,
          id: json[0].id,
          fullName: json[0].fullName,
          email: json[0].email,
          description: json[0].details,
          type: json[0].ticketType,
          date: json[0].created,
        });
        setTickets([...tickets, ticket]);
        console.log(tickets);
      });
  }
  return (
    <>
      <Button onClick={getTicketList}>Click Me!</Button>
    </>
  );
}
