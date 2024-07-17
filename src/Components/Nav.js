import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/portfolio/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/project">Project</Link>
        </li>
        <li>
          <Link to="/portfolio/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
