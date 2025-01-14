import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Weddinghalls from "./Component/Weddinghalls";
import WeddingHallsbyid from "./Component/WeddingHallsbyid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/weddinghalls">
                  Wedding Halls
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/WeddingHallsbyid">
                  Wedding Halls by id
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddinghalls" element={<Weddinghalls />} />
        <Route path="/WeddingHallsbyid" element={<WeddingHallsbyid />} />
      </Routes>
    </Router>
  );
}

export default App;
