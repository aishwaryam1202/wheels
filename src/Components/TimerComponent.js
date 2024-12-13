import React from 'react';
import { useState, useEffect } from "react";

const TimerComponent = () => {
const [count, setCount] = useState(100);
const [isRunning, setIsRunning] = useState(true);

useEffect(() => {
  if (!isRunning || count <= 0) return; // Stop the interval when paused or count is 0

    const intervalId = setInterval(() => {
    const prevCount = count;
    setCount( prevCount - 1); // Decrease count by 1
  }, 1000);

  return () => clearInterval(intervalId); // Cleanup interval on unmount or when dependencies change
}, [isRunning, count]);

const handleRestart = () => {
  setCount(100); // Reset the timer
  setIsRunning(true); // Ensure the timer is running
};

return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    {count > 0 ? <h1>Time Remaining: {count}</h1> : <h1>Time's Up!</h1>}
    <button onClick={() => setIsRunning(!isRunning)}>
      {isRunning ? "Pause" : "Resume"}
    </button>
    <button onClick={handleRestart} style={{ marginLeft: "10px" }}>
      Restart
    </button>
  </div>
);
}

export default TimerComponent