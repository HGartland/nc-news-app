import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at" };
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
    api.getArticles(this.props.topic, this.state.sort_by).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
  handleSorter = event => {
    console.log(event.target.value);
    this.setState({ sort_by: event.target.value });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <section>
        <aside className="Article-sorter">
          Sort by:
          <select onChange={this.handleSorter}>
            <option value="created_at">date created</option>
            <option value="comments_count">number of comments</option>
            <option value="votes">score</option>
          </select>
        </aside>
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </ul>
      </section>
    );
  }
}

export default ArticlesList;
