import React, { useEffect, useMemo } from "react";
import { Terminal } from "../components/terminal/terminal";
import { useTerminal } from "../components/terminal/hooks";

function TerminalController() {
  const promptLabel = "guest@austinparks:~ $";
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

  useEffect(() => {
    resetTerminal();

    pushToHistory(
      <>
        <div>
          <strong>Welcome!</strong> to Austin Parks' Portfolio.
        </div>
        <div>Type `help` to see a list of commands</div>
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
            <div>
              <span style={{ fontSize: "20px", color: "green" }}>
                The following commands can be used
              </span>
              <ul>
                <li>`skills`</li>
                <li>`about`</li>
                <li>`work experience`</li>
              </ul>

            </div>
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
              <span style={{ color: "red" }}>
                <strong>Warning!</strong> command
                <span style={{ color: "green" }}> {input}</span> not found
              </span>
            </div>
          </>
        );
      },
    }),
    [pushToHistory]
  );

  return (
    <div className="terminalController">
      <div className="screen-top"></div>
      <Terminal history={history} ref={setTerminalRef} promptLabel={promptLabel} commands={commands} />
    </div>
  );
}

export default TerminalController;
