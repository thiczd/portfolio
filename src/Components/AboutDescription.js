import React from "react";
import { motion } from "framer-motion";

const AboutDescription = ({ description }) => {
  const lines = description.split("\n");

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.01 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", marginTop: "24px" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(" ").map((word, wordIndex) => (
            <motion.span variants={child} key={wordIndex}>
              {word + " "}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default AboutDescription;
