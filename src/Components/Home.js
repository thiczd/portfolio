import React from "react";
import "../css/home.css";
import { motion } from "framer-motion";
import cImage from "../images/c-.png";
import cssImage from "../images/css-3.png";
import htmlImage from "../images/html-5.png";
import jsImage from "../images/js.png";
import mysqlImage from "../images/mysql.png";
import pythonImage from "../images/python.png";
import reactImage from "../images/react.png";
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

  const gridVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
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
          <div className="description">Welcome to my portfolio website.</div>
          <hr></hr>
        </motion.div>
        <motion.div
          className="skills"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="keySkills">Key Skills</h1>
          <div className="portfolio">
            {[
              { img: [htmlImage, cssImage], label: "HTML/CSS" },
              { img: jsImage, label: "JavaScript" },
              { img: reactImage, label: "React" },
              { img: cImage, label: "C++" },
              { img: pythonImage, label: "Python" },
              { img: mysqlImage, label: "MySQL" },
            ].map((skill, index) => {
              if (index === 0) {
                return (
                  <motion.div
                    className="grid-box"
                    key={skill.label}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={gridVariants}
                  >
                    <div>
                      <img src={skill.img[0]} alt={`${skill.label} Logo`} />
                      <img src={skill.img[1]} alt={`${skill.label} Logo`} />
                    </div>
                    <span>{skill.label}</span>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  className="grid-box"
                  key={skill.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={gridVariants}
                >
                  <img src={skill.img} alt={`${skill.label} Logo`} />

                  <span>{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="aboutMe"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <hr></hr>

          <h1> About </h1>
          <p>
            Hey my name is Thibault, thanks for checking out my website! Please
            feel free to check my projects and read more about me in the "About"
            section.
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
