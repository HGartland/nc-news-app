import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import LoaderDisplay from "./Loader";

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
    if (this.state.isLoading) return <LoaderDisplay />;
    return (
      <ul className="Comments-list">
        <CommentForm
          username={this.props.username}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        Comments:{" "}
        {this.state.comments.map(comment => {
          return (
            <CommentCard
              {...comment}
              key={comment.comment_id}
              username={this.props.username}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentsList;
