import React, { useState } from "react";
import "../css/project.css";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: " Project 1 🚀",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: " Project 2 ⭐",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: " Project 3 💻",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const [isOpen, setIsOpen] = useState(Array(projects.length).fill(false));

  const toggleCard = (index) => {
    setIsOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <>
      <div className="main-project">
        <motion.h1
          className="title-projects-section"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          My Current Projects
          <motion.div
            className="title-projects-section"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <hr></hr>
          </motion.div>
        </motion.h1>

        <motion.div
          className="grid-project"
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
        >
          {projects.map(({ description, title }, index) => (
            <motion.div
              key={index}
              transition={{
                layout: { duration: 1, type: "spring" },
                duration: 0.5,
                delay: 0.35 * index,
              }}
              layout
              onClick={() => {
                toggleCard(index);
              }}
              className="grid-box-project"
              style={{ borderRadius: "12px" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <motion.h2 layout="position">{title}</motion.h2>
              {isOpen[index] && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p>{description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Project;
