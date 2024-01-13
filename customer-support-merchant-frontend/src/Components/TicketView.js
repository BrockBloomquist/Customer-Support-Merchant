import "animate.css";
import Button from "react-bootstrap/Button";
import TrackVisibility from "react-on-screen";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { parseDate } from "./TicketCard";
export default function TicketView({ t, isSelected }) {
  return (
    <>
      <Container className="ticket-view-container">
        <h1>Ticket View</h1>
        {!isSelected && (
          <h1
            style={{
              position: "relative",
              top: "30%",
              display: "flex",
            }}
          >
            No Ticket Selected!
          </h1>
        )}
        {isSelected && (
          <Col>
            <Row>
              <div>
                <h2>Full Name: {t.fullName}</h2>
                <h2>Email: {t.email}</h2>
                <h2>id: {t.id}</h2>
                <h2>Date submitted: {parseDate(t.date)}</h2>
                <h2>Description: {t.description}</h2>
              </div>
            </Row>
          </Col>
        )}
      </Container>
    </>
  );
}
