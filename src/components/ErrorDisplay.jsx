import React from "react";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <article className="Error-display">
      <h3>
        Error: {status} - {msg}
      </h3>
      <a href={"/"}>
        <button>Return to homepage</button>
      </a>
    </article>
  );
};

export default ErrorDisplay;
