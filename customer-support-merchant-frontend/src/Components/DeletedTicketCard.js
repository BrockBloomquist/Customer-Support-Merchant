import Button from "react-bootstrap/Button";
import x from "../assets/img/xbtn.png";
import { useState } from "react";
import "./CSS/Ticket.css";
import Modal from "react-bootstrap/Modal";
export function parseDate(date) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return month + "/" + Number(day - 1) + "/" + year;
}
export default function DeletedTicketCard({
  idx,
  id,
  name,
  email,
  description,
  type,
  date,
}) {
  const url = "http://localhost:3005/delete-ticket/" + id;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  async function handleDelete() {
    fetch(url, {
      method: "POST",
    });
    handleClose();
    window.location.reload();
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
        <Button variant="light" className="delete-button" onClick={handleShow}>
          <img src={x} />
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this ticket permanently?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
