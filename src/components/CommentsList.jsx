import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";

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
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <section className="Comments-list">
        {this.state.comments.map(comment => {
          return <CommentCard {...comment} />;
        })}
      </section>
    );
  }
}

export default CommentsList;
