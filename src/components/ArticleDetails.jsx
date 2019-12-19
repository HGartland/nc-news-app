import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import ErrorDisplay from "./ErrorDisplay";
import Voter from "./Voter";
import LoaderDisplay from "./Loader";
import moment from "moment";

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
    if (this.state.isLoading) return <LoaderDisplay />;
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
          <h5>
            created by: {author} on {moment(created_at).format("LLL")} in topic:{" "}
            {topic}
          </h5>
          <section className="Article-body">{body}</section>
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
