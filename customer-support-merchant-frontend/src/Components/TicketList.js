import { useEffect } from "react";
import TicketCard from "./TicketCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function TicketList() {
  const url = "http://localhost:3005/tickets";
  const [isLoading, setIsLoading] = useState(false);
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
    async function getTicketList() {
      setIsLoading(true);
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          setTicket({
            id: json[0].id,
            fullName: json[0].fullName,
            email: json[0].email,
            description: json[0].details,
            type: json[0].ticketType,
            date: json[0].created,
          });
          setTickets([...tickets, ticket]);
          console.log(ticket);
        });
    }
    getTicketList();
  }, []);
  return <></>;
}
