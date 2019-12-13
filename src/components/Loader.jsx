import React from "react";

const Loader = () => {
  return (
    <div>
      <img
        src="data:image/jpeg;base64,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"
        alt="Loading"
      ></img>
    </div>
  );
};

export default Loader;
