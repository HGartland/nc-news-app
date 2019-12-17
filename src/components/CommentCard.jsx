import React, { Component } from "react";
import * as api from "../utils/api";
import Voter from "./Voter";

class CommentCard extends Component {
  state = { deleted: false };
  handleDel = event => {
    api.deleteComment(event.target.id).then(() => {
      this.setState({ deleted: true });
    });
  };
  render() {
    const { comment_id, created_at, author, votes, body } = this.props;
    if (this.state.deleted) {
      return <section className="Article-card">Comment Removed</section>;
    }
    return (
      <section className="Article-card">
        <h5>
          created by: {author} on {created_at}
        </h5>
        <p>{body}</p>
        <Voter type={"comments"} id={comment_id} votes={votes} />

        {this.props.username === author && (
          <button onClick={this.handleDel} id={comment_id}>
            Delete
          </button>
        )}
      </section>
    );
  }
}

export default CommentCard;
