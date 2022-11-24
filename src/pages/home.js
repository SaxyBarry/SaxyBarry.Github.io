import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
      <div className="home-page">
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            whileHover={{
                scale:1.1
            }}
            
        >
        <header className="App-header">
          <h1>Austin Parks</h1>
          <span>Developer | Student</span>
        </header>
        </motion.div>
      </div>
      
  );
};

export default Home;
