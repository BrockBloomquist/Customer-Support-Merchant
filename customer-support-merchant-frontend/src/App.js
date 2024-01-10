import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TicketList from "./Components/TicketList";
import TicketView from "./Components/TicketView";

function App() {
  return (
    <>
      <Header />
      <TicketList />
      <TicketView />
    </>
  );
}

export default App;
