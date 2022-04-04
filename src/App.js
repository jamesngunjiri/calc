import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulas from "./Formulas";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulas" element={<Formulas />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
