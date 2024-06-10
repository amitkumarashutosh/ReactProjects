import React, { useEffect, useState } from "react";
import "./progressbar.css";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        } else {
          return prev + 1;
        }
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="progress__container">
      <h4>Progress Bar</h4>
      <div className="progress__bar">
        <span className="percentage">{percentage}%</span>
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
