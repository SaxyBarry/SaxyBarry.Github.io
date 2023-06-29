import React from "react";
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./terminal.css";
import { motion } from "framer-motion";
import { Hidden } from "@material-ui/core";

export const Terminal = forwardRef((props, ref) => {
  const {
    history = [],
    promptLabel = "|",
    classStyle  = "terminal",
    commands = {},
    isAnimationRunning = false
  } = props;

  const inputRef = useRef();
  const [input, setInputValue] = useState("");

//   /**
//    * Focus on the input whenever we render the terminal or click in the terminal
//    */
//   useEffect(() => {
//     inputRef.current?.focus();
//   });

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  /**
   * When user types something, we update the input value
   */
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  /**
   * When user presses enter, we execute the command
   */
  const handleInputKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        const commandToExecute = commands?.[input.toLowerCase()];
        if (commandToExecute) {
          commandToExecute?.();
        }else{
            commands.incorrect(input);
        }
        setInputValue("");
      }
    },
    [commands, input]
  );

  return (
      <motion.div
      initial={{ height: "500px" }}
      animate={isAnimationRunning ? { height: "0px"} : { height: "500px" }}
      transition={{ duration: 5 }}className={classStyle} ref={ref} onClick={focusInput}>
        {history.map((line, index) => (
          <div
            className="terminal__line"
            key={`terminal-line-${index}-${line}`}
          >
            {line}
          </div>
        ))}
        <div className="terminal__prompt">
          <div className="terminal__prompt__label">{promptLabel}</div>
          <div className="terminal__prompt__input">
            <input
              type="text"
              value={input}
              onKeyDown={handleInputKeyDown}
              onChange={handleInputChange}
              ref={inputRef}
            />
          </div>
        </div>
      </motion.div>
  );
});
