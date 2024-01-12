import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TicketList from "./Components/TicketList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";

function App() {
  const [key, setKey] = useState("tickets");
  return (
    <>
      <Header />
      <Tabs
        fill
        justify
        id="ticket-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
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

export default App;
