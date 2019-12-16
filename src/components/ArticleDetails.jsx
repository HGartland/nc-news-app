import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";

class ArticleDetails extends Component {
  state = { article: {}, isLoading: true };
  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }
  fetchArticle = article_id => {
    api.getSingleArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
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
          <aside>Rating:{votes}</aside>
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
