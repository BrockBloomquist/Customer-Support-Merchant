import TicketList from "./TicketList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
export default function Dashboard() {
  const [key, setKey] = useState("tickets");
  return (
    <>
      <Tabs
        fill
        justify
        id="ticket-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        unmountOnExit
        variant="pills"
        transition={true}
      >
        <Tab eventKey="tickets" title="Tickets">
          <TicketList />
        </Tab>
        <Tab eventKey="deleted-tickets" title="Deleted Tickets">
          <h1>test</h1>
        </Tab>
      </Tabs>
    </>
  );
}
