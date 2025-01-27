import React from "react";
import "../css/home.css";
import { motion } from "framer-motion";

import gitHubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png";

const Home = () => {
  const handleClick = (social) => {
    if (social === "linkedIn") {
      return window.open(
        "https://www.linkedin.com/in/thibault-chezaud/",
        "_blank"
      );
    } else if (social === "git") {
      return window.open("https://github.com/thiczd", "_blank");
    }
  };

  return (
    <motion.div
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="home">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title">Welcome</h1>
          {/* <div className="description"></div> */}
        </motion.div>

        <motion.div
          className="about-home"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <hr></hr>

          <h1> About </h1>
          <p>
            My name is Thibault, I am a dedicated web developper and software
            programmer. Please feel free to check me website for more
            information about myself and my work. Thank you for visiting !
          </p>
          <hr></hr>
        </motion.div>

        <h1>Socials</h1>
        <div className="socials-img">
          <img
            src={gitHubLogo}
            alt="githublogo"
            onClick={() => {
              handleClick("git");
            }}
          />
          <img
            src={linkedInLogo}
            alt="linkedInlogo"
            onClick={() => {
              handleClick("linkedIn");
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
