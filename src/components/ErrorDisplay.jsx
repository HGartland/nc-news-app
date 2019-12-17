import React from "react";
import { Link } from "@reach/router";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <article className="Error-display">
      <h3>
        Error: {status} - {msg}
      </h3>
      <Link to="/">
        <button>Return to homepage</button>
      </Link>
    </article>
  );
};

export default ErrorDisplay;
