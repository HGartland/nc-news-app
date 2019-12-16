import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

class CommentsList extends Component {
  state = { comments: [], isLoading: true };
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments() {
    api.getCommentsByArticleID(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }
  addComment = newComment => {
    const newComments = [newComment, ...this.state.comments];
    this.setState({ comments: newComments, isLoading: false });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <ul className="Comments-list">
        Comments:{" "}
        {this.state.comments.map((comment, index) => {
          return <CommentCard {...comment} key={index} />;
        })}
        <CommentForm
          username={this.props.username}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
      </ul>
    );
  }
}

export default CommentsList;
