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
    else {
      this.setState({ paused: true });
      api
        .postComment(this.props.article_id, newComment)
        .then(comment => {
          this.props.addComment(comment);
        })
        .then(() => {
          this.setState({ comment: "", paused: false });
        })
        .catch(err => {
          alert("no response from server, please try again later");
          this.setState({ paused: false });
        });
    }
  };
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <form className="Comment-form" onSubmit={this.handleSubmit}>
        <h5>New Comment:</h5>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
          cols={190}
          required
        ></textarea>
        <button disabled={this.state.paused}>Submit</button>
      </form>
    );
  }
}

export default CommentForm;
