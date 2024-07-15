import React from "react";
import "../css/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-me-main">
      <div className="about-me">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 150,
            damping: 7,
          }}
        >
          More about Me
        </motion.h1>
        <p>
          I am currently pursuing a bachelor's degree in Computer Science at New
          Jersey Institute of Technology (NJIT), with an expected graduation
          date of 2024. I have developed a strong passion for computer
          programming and data science, acquiring skills in a range of
          programming languages and technologies including SQL, GitHub,
          JavaScript, Java, C++, C, Python, Numpy, Matplotlib, PyTorch, Jax, and
          various machine learning algorithms and techniques. I have applied
          these skills in several projects, notably creating a web application
          using HTML/CSS, JavaScript (jQuery), and PHP. I am actively seeking
          job or internship opportunities that will allow me to leverage and
          further develop my skills, and contribute to the advancement and
          innovation in the field.
        </p>
      </div>
    </div>
  );
};

export default About;
