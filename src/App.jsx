import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Test from "./Component/Test";
import Weddinghalls from "./Component/Weddinghalls";
import WeddingHallsbyid from "./Component/WeddingHallsbyid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
              <li className="nav-item">
                <Link className="nav-link" to="/test">
                  test
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
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
