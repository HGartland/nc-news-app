import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import * as api from "../utils/api";
import ErrorDisplay from "./ErrorDisplay";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at", page: 1 };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.topic !== prevProps.topic ||
      this.state.sort_by !== prevState.sort_by
    ) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api
      .getArticles(this.props.topic, this.state.sort_by, this.state.page)
      .then(articles => {
        this.setState({ articles, isLoading: false, err: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
  handleSorter = event => {
    this.setState({ sort_by: event.target.value });
  };
  render() {
    if (this.state.err)
      return (
        <ErrorDisplay
          msg={this.state.err.response.data.msg}
          status={this.state.err.response.status}
        />
      );
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
    return (
      <section className="Articles-container">
        <aside className="Article-sorter">
          Sort by:
          <select onChange={this.handleSorter}>
            <option value="created_at">date created</option>
            <option value="comments_count">number of comments</option>
            <option value="votes">score</option>
          </select>
        </aside>
        <ul className="Articles-list">
          {this.state.articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </ul>
      </section>
    );
  }
}

export default ArticlesList;
