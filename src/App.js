import "./App.css";
import ContactBar from "./components/footer/contactbar";
import Home from "./pages/home";
import TerminalController from "./pages/terminalController.js";
function App() {
  return (
    <div>
      <div className="App">
        <Home />
        <TerminalController />
        <ContactBar />
      </div>
    </div>
  );
}

export default App;
