import React from "react";

const Header = ({ username }) => {
  return (
    <header className="App-header">
      <h2>{"NORTHCODERS NEWS"}</h2>
      <aside>Logged in as: {username}</aside>
    </header>
  );
};

export default Header;
