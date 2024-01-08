import TicketCard from "./TicketCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  function getTicketList() {
    const url = "http://localhost:3005/tickets";
    fetch(url, {
      mehtod: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.json());
      })
      .then((data) => {
        setTickets(data);
      });
  }
  return (
    <>
      <Button onClick={getTicketList}>Click Me!</Button>
    </>
  );
}
