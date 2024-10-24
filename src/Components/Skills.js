import React from "react";
import cImage from "../images/c-.png";
import cssImage from "../images/css-3.png";
import htmlImage from "../images/html-5.png";
import jsImage from "../images/js.png";
import mysqlImage from "../images/mysql.png";
import pythonImage from "../images/python.png";
import reactImage from "../images/react.png";
import { motion } from "framer-motion";
import "../css/skills.css";

function Skills() {
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
  );
}

export default Skills;
