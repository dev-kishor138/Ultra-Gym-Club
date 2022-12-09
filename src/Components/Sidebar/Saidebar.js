import React from "react";
import Author from "./Author/Author";
import Details from "./Author/Details";
import Break from "./Break/Break";

const Saidebar = ({ totalTime, breakTime, setBreakTime }) => {
  
  return (
    <div className="sidebar">
      <Author />
      <Details />
      <Break setBreakTime={setBreakTime} totalTime={totalTime} breakTime={breakTime} />
    </div>
  );
};

export default Saidebar;
