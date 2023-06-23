import React, { useEffect, useMemo } from "react";
import { Terminal } from "../components/terminal/terminal";
import { useTerminal } from "../components/terminal/hooks";
import xCircle from "../assets/x-circle.svg";
import Typewriter from "typewriter-effect";

function TerminalController() {
  const promptLabel = "guest@austinparks:~ $";
  const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal();
  useEffect(() => {
    resetTerminal();
    pushToHistory(
      <>
          <Typewriter
            options={{skipAddStyles: true, cursor:'', delay:30}}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<div><strong>Welcome!</strong> to Austin Parks' Portfolio.</div><div>Type `help` to see a list of commands</div><h2>&#x1F6D1; Warning! &#x1F6D1;</h2><h3>This website is under active construction, be sure to wear proper PPE.</h3>"
                ).start();
            }}
          />
      </>
    );
  }, []);

  const commands = useMemo(
    () => ({
      hello: async () => {
        await pushToHistory(
          <>
            <span className="terminal__prompt__label">{promptLabel}</span> hello
            <br></br>
            <div>
              <span style={{ fontSize: "20px", color: "green" }}>
                Hello World!
              </span>
            </div>
          </>
        );
      },
      help: async () => {
        await pushToHistory(
          <>
            <span className="terminal__prompt__label">{promptLabel}</span> help
            <br></br>
            <Typewriter
              options={{ skipAddStyles: true, cursor: "", delay: 30 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<div><span style= "font-size: 20px; color: green">The following commands can be used</span><ul><li>`skills`</li><li>`about`</li><li>`experience`</li></ul></div>'
                  )
                  .start();
              }}
            />
          </>
        );
      },
      skills: async () => {
        await pushToHistory(
          <>
            <span className="terminal__prompt__label">{promptLabel}</span>{" "}
            skills
            <br></br>
            <Typewriter
              options={{ skipAddStyles: true, cursor: "", delay: 30 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<div><h3 style= "font-size: 20px; color: green">Languages</h3><li>Python; Java; Scheme; Racket; C; Javascript; Swift; PHP; SQL; Bash; Go</li><h3 style= "font-size: 20px; color: green">Concepts</h3><li>Compilers; Interpreters; Data Structures; Databases; Firewalls; Networks; Network Security; Secure Policy Design; Logic; APIs; Distributed Systems Engineering; QA Testing</li><h3 style= "font-size: 20px; color: green">Tools</h3><li>Git; IntelliJ; VSCode; Microsoft Azure; MariaDB; CouchDB; ZeroMQ; RabbitMQ; Docker; Apache; Jira; Zendesk</li></div>'
                  )
                  .start();
              }}
            />
          </>
        );
      },
      about: async () => {
        await pushToHistory(
          <>
            <span className="terminal__prompt__label">{promptLabel}</span> about
            <br></br>
            <Typewriter
              options={{ skipAddStyles: true, cursor: "", delay: 1 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<div><h3 style= "font-size: 20px; color: green; margin-bottom: 0px">About Me</h3><p>Indiana University Class of 2023 Graduate from the Luddy School of Engineering with a B.S. with distinction in Computer Science, Specializing in Software Engineering; Minor in Cybersecurity Informatics, and a Certificate in Rock and Roll History. When not studying or working, I can usually be found playing video games, catching up on movies/tv shows from my watchlist, reading science fiction, listening to music, or taking care of my pet bird Rei.</p>`
                  )
                  .pasteString(
                    "<li><strong>Favorite Books:</strong> Dune, Frank Herbert; World War Z, Max Brooks; The Man in The High Castle, Phillip K. Dick</li>"
                  )
                  .pauseFor(1000)
                  .pasteString(
                    "<li><strong>Favorite Movies:</strong> Juno, Little Miss Sunshine, Banshees of Inisherin, Everything Everywhere All at Once</li>"
                  )
                  .pauseFor(1000)
                  .pasteString(
                    "<li><strong>Favorite Games:</strong> Fallout: New Vegas, Hellblade: Senua's Sacrifice, Tears of the Kingdom, The Binding of Isaac</li>"
                  )
                  .pauseFor(1000)
                  .pasteString(
                    "<li><strong>Favorite Musicians:</strong> Frank Zappa, Bob Dylan, Brian Eno, Big Thief, Beach House, Father John Misty, LCD Soundsystem</li></ul>"
                  )
                  .start();
              }}
            />
          </>
        );
      },
      experience: async () => {
        await pushToHistory(
          <>
            <span className="terminal__prompt__label">{promptLabel}</span> experience
            <br></br>
            <Typewriter
              options={{ skipAddStyles: true, cursor: "", delay: 0 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<div><h3 style= "font-size: 20px; color: green">Experience</h3>`
                  )
                  .pasteString(
                    `<h4>Indiana University: Bloomington</h4><ul><li>08/2019 - 05/2023</li><li>3.67 GPA</li><li>Computer Science B.S. with Distinction, Cybersecurity Informatics Minor, Certificate in Rock and Roll History</li><li>Dean’s List (Fall 2021, Spring 2022, Spring 2023); Hudson and Holland Scholar</li></ul>`
                  )
                  .pauseFor(1000)
                  .pasteString(
                    `<h4>Exclaimer</h4><ul><li>01/2022 - 11/2021</li><li>Support Specialist and QA Engineer</li><li>Executed comprehensive manual QA and bug testing for the Appointments Powerup application involving the identification, replication, and detailed documentation of bugs, directly enhancing the user experience and platform stability</li><li>Delivered exceptional customer service and support for the Exclaimer enterprise product to over 200 global companies of various sizes</li></ul>`
                  )
                  .pauseFor(1000)
                  .pasteString(
                    `<h4>Periodic</h4><ul><li>09/2021 - 12/2021</li><li>Platform Specialist</li><li>Collaborated closely with Product and Development teams to perform thorough manual QA and bug testing of
over 20 sprints of work</li><li>Delivered exceptional customer service and support for the Exclaimer enterprise product to over 200 global companies of various sizes</li></ul>`
                  )
                  .pauseFor(1000)
                  .pasteString(
                    `<h4>Indiana University Geochemistry Department</h4><ul><li>03/2021 - 06/2022</li><li>Research Assistant</li><li>Conducted in-depth SQL queries on databases containing over one thousand entries to advance research on rare
earth materials</li><li>Utilized Linux, Apache, PHP and to uphold and manage the facility's website and tools</li></ul>`
                  )
                  .pauseFor(1000)
                  .pasteString(
                    `<h4>Nextech</h4><ul><li>05/2018 - 04/2019</li><li>Catapult Intern</li><li>Highly competitive and immersive year-long internship for qualified high school students, involving learning
and implementing foundational web development skills</li><li>Created projects utilizing HTML, CSS, and JavaScript to provide solutions to real-world problems under the
guidance of highly respected industry professionals</li></ul>`
                  )
                  .start();
              }}
            />
          </>
        );
      },
      incorrect: async (input) => {
        await pushToHistory(
          <>
            <div>
              <span className="terminal__prompt__label">{promptLabel}</span>{" "}
              {input}
              <br></br>
              <Typewriter
                options={{ skipAddStyles: true, cursor: "", delay: 30 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="color: red"><strong>Warning!</strong> command<span style = "color: green" }}> ' +
                        input +
                        "</span> not found</span>"
                    )
                    .start();
                }}
              />
            </div>
          </>
        );
      },
    }),
    [pushToHistory]
  );

  return (
    <div className="terminalController">
      <div className="screen-top">
        <img
          src={xCircle}
          alt="x-circle"
          className="x-icon"
        ></img>
      </div>
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={promptLabel}
        commands={commands}
      />
    </div>
  );
}

export default TerminalController;
