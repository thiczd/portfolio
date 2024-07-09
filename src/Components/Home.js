import React from "react";
import "../css/home.css";
import cImage from "../images/c-.png";
import cssImage from "../images/css-3.png";
import htmlImage from "../images/html-5.png";
import jsImage from "../images/js.png";
import mysqlImage from "../images/mysql.png";
import pythonImage from "../images/python.png";
import structureImage from "../images/structure.png";
import reactImage from "../images/react.png";
const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="title">Homepage</h1>
        <div className="description">Welcome to my portfolio website.</div>
        <div className="portfolio">
          <div className="grid">
            <div className="grid-html-css">
              <img src={htmlImage} alt="HTML Logo" />
              <img src={cssImage} alt="CSS Logo" />
            </div>
            <span>HTML/CSS</span>
          </div>
          <div className="grid">
            <img src={jsImage} alt="JavaScript Logo" />
            <span>JavaScript</span>
          </div>
          <div className="grid">
            <img src={reactImage} alt="React Logo" />
            <span>React</span>
          </div>
          <div className="grid">
            <img src={cImage} alt="C++ Logo" />
            <span>C++</span>
          </div>
          <div className="grid">
            <img src={pythonImage} alt="Python Logo" />
            <span>Python</span>
          </div>
          <div className="grid">
            <img src={mysqlImage} alt="MySQL Logo" />
            <span>MySQL</span>
          </div>
          <div className="grid">
            <img src={structureImage} alt="Structure Logo" />
            <span>Structure</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
