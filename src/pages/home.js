import React from "react";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <div className="home-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.1,
        }}
      >
          <svg viewbox="0 0 100 60">
            <defs>
              <mask id="mask" x="0" y="0" width="100" height="100">
                <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
                <text
                  text-anchor="middle"
                  x="150"
                  y="70"
                  dy="1"
                  className="headerText1"
                >
                  Austin Parks
                </text>
                <text
                  text-anchor="middle"
                  x="150"
                  y="120"
                  dy="1"
                  className="headerText2"
                >
                  Developer | Student
                </text>
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              mask="url(#mask)"
              fill-opacity=".75"
              fill="#fbcaefff"
            />
          </svg>
      </motion.div>
    </div>
  );
};

export default Home;
