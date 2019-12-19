import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = { change: 0 };
  vote = addedVotes => {
    this.setState(currentState => {
      return { change: currentState.change + addedVotes };
    });
    api.patchVotes(this.props.type, this.props.id, addedVotes).catch(err => {
      this.setState(currentState => {
        return { change: currentState.change - addedVotes };
      });
      alert("no response from server, please try again later");
    });
  };
  render() {
    const { change } = this.state;
    const { votes } = this.props;
    return (
      <div className="Voter">
        votes:{" "}
        <button
          onClick={() => {
            this.vote(1);
          }}
          disabled={change > 0}
        >
          +1
        </button>{" "}
        {votes + change}{" "}
        <button
          onClick={() => {
            this.vote(-1);
          }}
          disabled={change < 0}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Voter;
