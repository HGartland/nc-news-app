import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";

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
        </Router>
      </div>
    );
  }
}

export default App;
