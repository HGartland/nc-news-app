import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    comment: {
      votes: 0,
      author: "USERNAME_HERE",
      created_at: "JUST NOW",
      body: ""
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.comment);
  };
  handleChange = event => {
    const comment = { ...this.state.comment };
    comment.body = event.target.value;
    this.setState({ comment });
  };
  render() {
    return (
      <form className="Comment-form">
        <h5>New Comment:</h5>
        <textarea onChange={this.handleChange} cols={200}></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default CommentForm;
