import React, { Component } from "react";
import * as api from "../utils/api";

class CommentForm extends Component {
  state = {
    comment: "",
    paused: false
  };
  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      username: this.props.username,
      body: this.state.comment
    };
    if (/^\s+$/.test(this.state.comment)) alert("comments must not be empty");
    else if (this.state.comment.length > 0)
      api
        .postComment(this.props.article_id, newComment)
        .then(comment => {
          this.props.addComment(comment);
          this.setState({ comment: "", paused: true });
        })
        .then(() => {
          setTimeout(() => {
            this.setState({ paused: false });
          }, 1000);
        });
  };
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <form className="Comment-form">
        <h5>New Comment:</h5>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
          cols={190}
        ></textarea>
        <button onClick={this.handleSubmit} disabled={this.state.paused}>
          Submit
        </button>
      </form>
    );
  }
}

export default CommentForm;
