import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/portfolio/" className="buttons">
          Home
        </Link>
        <Link to="/portfolio/skills" className="buttons">
          Skills
        </Link>
        <Link to="/portfolio/project" className="buttons">
          Project
        </Link>

        <Link to="/portfolio/about" className="buttons">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
