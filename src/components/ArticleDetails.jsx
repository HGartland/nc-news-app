import React, { Component } from "react";
import Loader from "react-loader-spinner";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import ErrorDisplay from "./ErrorDisplay";
import Voter from "./Voter";

class ArticleDetails extends Component {
  state = { article: {}, isLoading: true, err: false };
  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }
  fetchArticle = article_id => {
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false, err: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
  render() {
    if (this.state.err) {
      return (
        <ErrorDisplay
          msg={this.state.err.response.data.msg}
          status={this.state.err.response.status}
        />
      );
    }
    if (this.state.isLoading)
      return (
        <Loader
          className="test"
          type="Puff"
          color="white"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at
    } = this.state.article;
    return (
      <main>
        <section className="Article-details">
          <h2>{title}</h2>
          <Voter type={"articles"} id={this.props.article_id} votes={votes} />
          <p>
            created by: {author} on {created_at} in topic: {topic}
          </p>
          <section>{body}</section>
        </section>
        <CommentsList
          username={this.props.username}
          article_id={this.props.article_id}
        />
      </main>
    );
  }
}

export default ArticleDetails;
