import React from "react";
import Author from "./Author/Author";
import Details from "./Author/Details";
import Break from "./Break/Break";
import Exercise from "./Exercise/Exercise";

const Saidebar = ({ totalTime }) => {
  return (
    <div className="sidebar">
      <Author />
      <Details />
      <Break />
      <Exercise totalTime={totalTime} />
    </div>
  );
};

export default Saidebar;
