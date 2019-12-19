import React from "react";
import { Link } from "@reach/router";
const Header = ({ username }) => {
  return (
    <header className="App-header">
      <div className="App-title">
        <Link to="/">
          <h2 className="Title">
            <p className="Red-start">{"<"}</p>NORTHCODERS - NEWS
            <p className="Red-end">{"/>"}</p>
          </h2>
        </Link>
        <p className="Sub-title">
          All the latest discussions in Northcoders Leeds
        </p>
      </div>

      <aside className="User-link">Logged in as: {username}</aside>
    </header>
  );
};

export default Header;
