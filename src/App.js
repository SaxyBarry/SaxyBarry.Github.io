import "./App.css";
import ContactBar from "./components/footer/contactbar";
import Home from "./pages/home";
import Experience from "./pages/experience";
import TerminalController from "./pages/terminalController.js";
function App() {
  return (
    <div>
      <div className="App">
        <Home />
        {/* <Experience /> */}
        <TerminalController />
        <ContactBar />
      </div>
    </div>
  );
}

export default App;
