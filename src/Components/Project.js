import React, { useState } from "react";
import "../css/project.css";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: " Influenza Visualizer Project 📊",
      description:
        "Created an Influenza Visualizer Website to analyze and demonstrate data insight using CDC's flu data. This website was made using technologies such as HTML/CSS, JavaScript, Coldfusion and ChartJs",
    },
    {
      title: " House Prediction Model 🏠",
      description:
        "Data Science Model build to predict housing prices based on an already existing dataset with 600 entries and a select 13 features. Project was later on deployed onto hugginface (NOTE: this is no longer available as a live deployment).",
    },
    {
      title: " This Website 💻",
      description:
        "Creating a responsive web app using ReactJs and the FramerMotion library. This website is a proof of concept for my front-end development skills in modern framework such as ReactJs. ",
    },
    {
      title: "Todo WebAPP 📋",
      description:
        "(Work in Progress)  Creating a responsive web app using ReactJs, Express and MongoDB. This is a work in progress",
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
          My Projects
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
