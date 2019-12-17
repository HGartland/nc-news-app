import React from "react";
import { Link } from "@reach/router";
const Header = ({ username }) => {
  return (
    <header className="App-header">
      <Link to="/" className="App-title">
        <h2>NORTHCODERS NEWS</h2>
      </Link>

      <aside>Logged in as: {username}</aside>
    </header>
  );
};

export default Header;
