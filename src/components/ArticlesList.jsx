import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api.getArticles(this.props.topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <ul>
        {this.state.articles.map(article => {
          return <ArticleCard {...article} key={article.article_id} />;
        })}
      </ul>
    );
  }
}

export default ArticlesList;
