import React, { Component } from "react";

class CommentForm extends Component {
  handleSubmit = () => {
    this.props.updateComments();
  };
  render() {
    return (
      <form className="Comment-form">
        <h5>New Comment:</h5>
        <textarea cols={200}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}

export default CommentForm;
