import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life"
      },
      {
        slug: "football",
        description: "FOOTIE!"
      },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?"
      }
    ],
    isLoading: true
  };
  render() {
    if (this.state.NavBar) return <h2>Loading</h2>;
    return (
      <section className="Nav-bar">
        {this.state.topics.map(topic => {
          const slug = topic.slug;
          return (
            <Link to={`/topics/${slug}`} key={slug}>
              <button>{slug}</button>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default NavBar;
