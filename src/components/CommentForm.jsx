import React, { Component } from "react";
import * as api from "../utils/api";

class CommentForm extends Component {
  state = {
    comment: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      username: this.props.username,
      body: this.state.comment
    };
    api.postComment(this.props.article_id, newComment).then(comment => {
      this.props.addComment(comment);
      this.setState({ comment: "" });
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
          default={this.state.comment}
          cols={190}
        ></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default CommentForm;
