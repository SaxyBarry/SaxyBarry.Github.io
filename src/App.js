import './App.css';
import ContactBar from "./components/footer/contactbar";
import About from "./pages/about";
import Experience from "./pages/experience";
import Home from './pages/home';
function App() {
  return (
    <div>
      <div className="App">
        <Home />
        <Experience />
        <ContactBar />
      </div>
    </div>
  );
}

export default App;
