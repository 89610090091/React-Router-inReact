import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";

export default function App() {
  return (

    <div className="wrap">
      <Router>
        <main>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Shop' element={<Shop />} />
          </Routes>
        </main>
      </Router>
    </div>

  );
}
