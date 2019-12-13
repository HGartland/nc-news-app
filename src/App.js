import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/articles/:topic" />
      </Router>
    </div>
  );
}

export default App;
