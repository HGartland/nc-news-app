const axios = require("axios");
const urlStart = "https://nc-news-host.herokuapp.com/api";

exports.getAllTopics = () => {
  return axios.get(`${urlStart}/topics`).then(({ data }) => {
    return data.topics;
  });
};

exports.getArticles = topic => {
  return axios
    .get(`${urlStart}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

exports.getSingleArticle = article_id => {
  return axios.get(`${urlStart}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

exports.getCommentsByArticleID = article_id => {
  return axios
    .get(`${urlStart}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};
