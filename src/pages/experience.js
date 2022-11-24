import React from "react";
import ContactBar from "../components/footer/contactbar";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="experience-page">
      <header className="App-header">
        <h1>My Experience</h1>
        <a href="../assets/Austin Parks Resume.pdf" download>
          My Resume
        </a>
      </header>
      <div className="body">
        <motion.div
          className="one body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Indiana University: Bloomington</h2>
        </motion.div>
        <motion.div
          className="two body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2>Work Experience</h2>
        </motion.div>
        <motion.div
          className="three body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <h2>Technical Skills</h2>
        </motion.div>
        <motion.div
          className="four body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>Soft Skills</h2>
        </motion.div>
      </div>
      <ContactBar />
    </div>
  );
};

export default Experience;
