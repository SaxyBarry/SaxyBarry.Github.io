import React from "react";
import { motion } from "framer-motion";
import ContentCard from '../components/body-card/card'
const Experience = () => {
  return (
    <div className="experience-page">
      <header className="Experience-header">
        <h1>Experience</h1>
        <a
          className="resume-link"
          href="\resume.pdf"
          download="Austin Parks' Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          My Resume
        </a>
      </header>
      <div className="exp-body">
        <div className="section1">
          <motion.div
            className="one body-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ContentCard
              header={"Indiana University: Bloomington"}
              subtext={"2019 - 2023"}
            />
          </motion.div>
          <motion.div
            className="two body-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ContentCard header={"Work Experience"} subtext={""} />
          </motion.div>
        </div>
        <div className="section2">
          <motion.div
            className="three body-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ContentCard
              header={"Skills"}
              subtext={""}
              content={
                <list>
                  <li>
                    Languages: Python; Java; Scheme; Racket; C; Javascript;
                    Swift; PHP; SQL; Bash; Go; React
                  </li>
                  <li>
                    Concepts: Compilers; Interpreters; Data Structures;
                    Databases; Firewalls; Networks; Network Security; Secure
                    Policy Design; Logic; APIs; Distributed Systems Engineering;
                    QA Testing
                  </li>
                  <li>
                    Tools: Git; IntelliJ; VSCode; Microsoft Azure; MariaDB;
                    CouchDB; ZeroMQ; RabbitMQ; Docker; Apache; Jira; Zendesk
                  </li>
                </list>
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
