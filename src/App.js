import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Experience from "./pages/experience";
import Home from './pages/home';
function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
