import React from "react";
import Loader from "react-loader-spinner";

const LoaderDisplay = () => {
  return (
    <Loader
      className="test"
      type="Puff"
      color="white"
      height={100}
      width={100}
      timeout={3000}
    ></Loader>
  );
};

export default LoaderDisplay;
