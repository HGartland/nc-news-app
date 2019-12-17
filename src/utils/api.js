const axios = require("axios");
const urlStart = "https://nc-news-host.herokuapp.com/api";

exports.getAllTopics = () => {
  return axios.get(`${urlStart}/topics`).then(({ data }) => {
    return data.topics;
  });
};

exports.getArticles = (topic, sort_by) => {
  return axios
    .get(`${urlStart}/articles`, { params: { topic, sort_by } })
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

exports.postComment = (article_id, newComment) => {
  return axios
    .post(`${urlStart}/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

exports.deleteComment = comment_id => {
  return axios.delete(`${urlStart}/comments/${comment_id}`).catch(console.dir);
};

exports.patchVotes = (type, id, votes) => {
  console.log(type, id, votes);
};
