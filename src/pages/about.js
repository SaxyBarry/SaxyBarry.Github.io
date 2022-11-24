import { motion } from 'framer-motion';
import React from 'react';
import ContactBar from "../components/footer/contactbar";

const About = () => {
  return (
    <div className="about-page">
      <header className="App-header">
        <h1>About Me</h1>
      </header>
      <div className="body">
        <motion.div
          className="one body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Music</h2>
        </motion.div>
        <motion.div
          className="two body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2>Books</h2>
        </motion.div>
        <motion.div
          className="three body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <h2>Gaming</h2>
        </motion.div>
        <motion.div
          className="four body-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>Other Interests</h2>
        </motion.div>
      </div>
      <ContactBar />
    </div>
  );
};
  
export default About;