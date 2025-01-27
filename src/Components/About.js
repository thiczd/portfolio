import React from "react";
import "../css/about.css";
import AboutTitle from "./AboutTitle";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about-me-main">
      <div className="about-me">
        <AboutTitle text="More about Me 👋"></AboutTitle>

        <motion.hr
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.hr>
        <motion.div
          style={{
            overflow: "hidden",
            marginTop: "24px",
            width: "100%",
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 1.5 },
            opacity: { duration: 2.5 },
          }}
          className="about-me-description"
        >
          I am currently pursuing a bachelor's degree in Computer Science at New
          Jersey Institute of Technology (NJIT), with an expected graduation
          date of Dec. 2024.
          <br></br>
          <br></br>I have developed a strong passion for computer programming,
          acquiring skills in a range of programming languages and technologies
          including SQL, GitHub, JavaScript, Java, C++, C, Python, Numpy,
          Matplotlib, PyTorch, Jax.
          <br></br>
          My main focus is Web Development as it is in my opinion a critical
          role in 2024. I am currently learning ReactJs, Node.js, Express and
          MongoDB to fine tune my full stack developer skills. I have applied
          these skills in several projects, notably creating a web application
          using HTML/CSS, JavaScript (jQuery), PHP, ReactJs.
          <br></br>
          <br></br>I am actively seeking job or internship opportunities that
          will allow me to leverage and further develop my skills, and
          contribute to the advancement and innovation in the field.
        </motion.div>
      </div>
    </div>
  );
};

export default About;
