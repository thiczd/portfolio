import React, { useState } from "react";
import "../css/project.css";
import { motion } from "framer-motion";
import influenza_main from "../images-projects/influenza_main.png";
import influenza_distribution from "../images-projects/influenza_distribution.png";
import influenza_distribution_gif from "../images-projects/influenza_distribution_gif.gif";
import { FaExpand } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: " Influenza Visualizer Project 📊",
      description:
        "Created an Influenza Visualizer Website to analyze and demonstrate data insight using CDC's flu data. This website was made using technologies such as HTML/CSS, JavaScript, Coldfusion and ChartJs",
      tech_stack: ["HTML/CSS", "JavaScript", "ChartJs"],
      images_projects: [
        influenza_main,
        influenza_distribution,
        influenza_distribution_gif,
      ],
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
  // TODO, have an expansion button to have the whole div take the entire screen width
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
          {projects.map(
            ({ description, title, tech_stack, images_projects }, index) => (
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
                <FaExpand className="expand-icon"></FaExpand>

                {isOpen[index] && (
                  <motion.div
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <p>{description}</p>
                    {tech_stack && (
                      <motion.div style={{ marginBottom: "12px" }}>
                        Tech Stack:{" "}
                        {tech_stack.map((tech, i) => (
                          <span style={{ color: "red" }}>{tech + " "}</span>
                        ))}
                      </motion.div>
                    )}

                    {images_projects && (
                      <motion.div>
                        Images: <br></br>
                        {images_projects.map((image, i) => (
                          <img
                            className="image-project"
                            src={image}
                            alt=""
                          ></img>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Project;
