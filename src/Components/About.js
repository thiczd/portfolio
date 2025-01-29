import React from "react";
import "../css/about.css";
import AboutTitle from "./AboutTitle";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about-me-main">
      <div className="about-me">
        <AboutTitle text="More about me 👋"></AboutTitle>

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
          I recently graduated from the New Jersey Institute of Technology with
          a Bachelor's in Computer Science
          <br></br>
          <br></br>I have developed a strong passion for computer programming,
          acquiring skills in a range of programming languages and technologies
          including: <br></br>
          <ul>
            <li>C </li>
            <li>C++ </li>
            <li>Java </li>
            <li>Python </li>
          </ul>
          My main focus is Web Development as it is in my opinion a critical
          role in 2024. I am currently learning ReactJs, Node.js, Express and
          MongoDB to fine tune my full stack developer skills.
          <br></br>I have applied these skills in several projects, notably
          creating a web application using:
          <ul>
            <li> HTML/CSS </li>
            <li> Javascript </li>
            <li> PHP </li>
            <li> Coldfusion </li>
            <li> ReactJs </li>
            <li> ExpressJs </li>
          </ul>
          I am actively seeking full time employment opportunities in
          software/web development
        </motion.div>
      </div>
    </div>
  );
};

export default About;
