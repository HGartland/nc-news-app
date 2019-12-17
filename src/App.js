import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";
import ErrorDisplay from "./components/ErrorDisplay";

class App extends Component {
  state = { username: "weegembump" };
  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <NavBar />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic" />
          <ArticleDetails
            username={this.state.username}
            path="/articles/:article_id"
          />
          <ErrorDisplay status="404" msg="Page not found" default />
        </Router>
      </div>
    );
  }
}

export default App;
