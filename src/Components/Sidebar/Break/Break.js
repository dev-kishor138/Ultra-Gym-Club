import React, { useState } from "react";

const Break = ({ setBreakTime, breakTime, totalTime }) => {
    const [time, activity] = useState(0)
//   function activity(time) {
//     activity(time);
//   }
  return (
    <>
      <div className="break">
        <h2>Add A Break</h2>
        <div className="break-time">
          <button onClick={() => setBreakTime(breakTime + 10)}>10</button>
          <button onClick={() => setBreakTime(breakTime + 20)}>20</button>
          <button onClick={() => setBreakTime(breakTime + 30)}>30</button>
          <button onClick={() => setBreakTime(breakTime + 40)}>40</button>
          <button onClick={() => setBreakTime(breakTime + 50)}>50</button>
        </div>
      </div>

      <div className="exercise">
        <h2>Exercise Details</h2>
        <div className="exercise-time">
          <h4>Exercise Time</h4>
          <p>
            {totalTime}
            <span>seconds</span>
          </p>
        </div>
        <div className="break-time">
          <h4>Break Time</h4>
          <p>
            <span>{breakTime}</span>seconds
          </p>
        </div>
        <button onClick={() => activity(totalTime - breakTime)}>
          Activity Complete
        </button>
        <div className="activity">
          <h4>Activity Time</h4>
          <p>
            <span>{time}</span>seconds
          </p>
        </div>
      </div>
    </>
  );
};

export default Break;
