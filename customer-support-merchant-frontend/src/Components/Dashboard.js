import TicketList from "./TicketList";
import DeletedTicketList from "./DeletedTicketList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [key, setKey] = useState(sessionStorage.getItem("autosave"));
  useEffect(() => sessionStorage.setItem("autosave", key), [key]);
  return (
    <>
      <Tabs
        fill
        justify
        id="ticket-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        mountOnEnter
        unmountOnExit
        variant="pills"
        transition={true}
      >
        <Tab eventKey="tickets" title="Tickets">
          <TicketList />
        </Tab>
        <Tab eventKey="deleted-tickets" title="Deleted Tickets">
          <DeletedTicketList />
        </Tab>
      </Tabs>
    </>
  );
}
