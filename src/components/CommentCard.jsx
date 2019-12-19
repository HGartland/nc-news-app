import React, { Component } from "react";
import * as api from "../utils/api";
import Voter from "./Voter";
import moment from "moment";

class CommentCard extends Component {
  state = { deleted: false };
  handleDel = event => {
    api
      .deleteComment(event.target.id)
      .then(() => {
        this.setState({ deleted: true });
      })
      .catch(err => {
        alert("no response from server, please try again later");
      });
  };
  render() {
    const { comment_id, created_at, author, votes, body } = this.props;
    if (this.state.deleted) {
      return <strong className="Article-card">Comment Removed</strong>;
    }
    return (
      <section className="Comment-card">
        <h5>
          created by: {author} on {moment(created_at).format("LLL")}
        </h5>
        <section>{body}</section>
        <div className="Card-buttons">
          <Voter type={"comments"} id={comment_id} votes={votes} />

          {this.props.username === author && (
            <button onClick={this.handleDel} id={comment_id}>
              Delete
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default CommentCard;
