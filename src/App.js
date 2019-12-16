import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:topic" />
        <ArticleDetails path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
