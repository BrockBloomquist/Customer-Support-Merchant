import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./CSS/Ticket.css";
export function parseDate(date) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return month + "/" + Number(day - 1) + "/" + year;
}
export default function TicketCard({
  idx,
  id,
  name,
  email,
  description,
  type,
  date,
}) {
  function truncate(str) {
    return str.length > 55 ? str.substring(0, 55) + "..." : str;
  }

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid",
          width: "400px",
          minHeight: "100px",
          maxHeight: "150px",
          textAlign: "left",
        }}
      >
        <div className="ticket-card-text">
          <h6>Full name: {name}</h6>
          <h6>Email: {email}</h6>
          <h6>Type: {type}</h6>
          <h6>Date submitted: {parseDate(date)}</h6>
        </div>
      </div>
    </>
  );
}
