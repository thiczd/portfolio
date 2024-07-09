import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
