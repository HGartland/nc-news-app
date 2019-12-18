import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Loader from "./Loader";

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics() {
    api.getAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <section className="Nav-bar">
        Topics:
        {this.state.topics.map(topic => {
          const slug = topic.slug;
          return (
            <Link to={`/topics/${slug}`} key={slug}>
              <button className="Nav-button">
                <span>{`<${slug}/>`}</span>{" "}
              </button>
            </Link>
          );
        })}
        <Link to={`/`}>
          <button className="Nav-button">
            <span>{"< all />"}</span>
          </button>
        </Link>
      </section>
    );
  }
}

export default NavBar;
