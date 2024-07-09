import React from "react";
import "../css/home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="title">Homepage</h1>
        <div className="description">Welcome to my portfolio website.</div>
        <div className="portfolio">
          <div className="grid">HTML/CSS</div>
          <div className="grid">JavaScript</div>
          <div className="grid">React</div>
          <div className="grid">C++</div>
          <div className="grid">Python</div>
          <div className="grid">MySQL</div>
        </div>
      </div>
    </>
  );
};

export default Home;
