import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
      <p>
        <Link to="/">← Go to Homepage</Link>
      </p>
    </div>
  );
};

export default NoMatch;
