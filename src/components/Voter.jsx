import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = { change: 0 };
  vote = addedVotes => {
    this.setState(currentState => {
      return { change: currentState.change + addedVotes };
    });
    api.patchVotes(this.props.type, this.props.id, addedVotes);
  };
  render() {
    const { change } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.vote(1);
          }}
          name="1"
          disabled={change > 0}
        >
          +1
        </button>{" "}
        {votes + change}{" "}
        <button
          onClick={() => {
            this.vote(-1);
          }}
          name="-1"
          disabled={change < 0}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Voter;
