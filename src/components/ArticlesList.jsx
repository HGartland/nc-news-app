import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import ErrorDisplay from "./ErrorDisplay";
import LoaderDisplay from "./Loader";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    page: 1,
    total: 1
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.sort_by !== prevState.sort_by ||
      this.state.page !== prevState.page
    ) {
      this.fetchArticles();
    } else if (this.props.topic !== prevProps.topic) {
      this.setState({ page: 1 }, this.fetchArticles);
    }
  }
  fetchArticles = () => {
    api
      .getArticles(this.props.topic, this.state.sort_by, this.state.page)
      .then(({ articles, total }) => {
        this.setState({ articles, isLoading: false, err: false, total });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
  handleSorter = event => {
    this.setState({ sort_by: event.target.value });
  };
  handlePage = event => {
    const change = event.target.name;
    this.setState(currentState => {
      return { page: currentState.page + +change };
    });
  };
  render() {
    if (this.state.err)
      return (
        <ErrorDisplay
          msg={this.state.err.response.data.msg}
          status={this.state.err.response.status}
        />
      );
    if (this.state.isLoading) return <LoaderDisplay />;
    return (
      <section className="Articles-container">
        <aside className="Article-filter">
          <p>Sort by :</p>
          <select onChange={this.handleSorter} className="Sort-button">
            <option value="created_at">date created</option>
            <option value="comments_count">number of comments</option>
            <option value="votes">score</option>
          </select>
          <button
            className="Sort-button"
            onClick={this.handlePage}
            disabled={this.state.page === 1}
            name={-1}
          >
            prev
          </button>
          <p>Page {this.state.page}</p>

          <button
            onClick={this.handlePage}
            disabled={this.state.page >= this.state.total / 8}
            name={1}
            className="Sort-button"
          >
            next
          </button>
        </aside>
        <h1>{`< ${this.props.topic || "all"} />`}</h1>
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
