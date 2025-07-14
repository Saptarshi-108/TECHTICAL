import React, { useEffect, useState } from "react";
import "./Loader.css"; // Make sure this points to the CSS file

const GlobalLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout1, timeout2;

    // Step 1: Load to 70%
    timeout1 = setTimeout(() => setProgress(70), 700);

    // Step 2: Pause 1 second at 70%, then go to 100%
    timeout2 = setTimeout(() => {
      setProgress(100);
      // Step 3: After a short delay, trigger onComplete
      setTimeout(() => onComplete(), 500);
    }, 1700);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onComplete]);

  return (
    <div className="global-loader-container">
      <div className="loader">
        <div className="loader-fill" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
      <div className="loader-percent">
        {progress < 100 ? "Loading..." : "Done!"}
      </div>
    </div>
  );
};

export default GlobalLoader;
