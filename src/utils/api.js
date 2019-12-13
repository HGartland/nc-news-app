const axios = require("axios");
const urlStart = "https://nc-news-host.herokuapp.com/api";

exports.getAllTopics = () => {
  return axios.get(`${urlStart}/topics`).then(({ data }) => {
    return data.topics;
  });
};

exports.getArticles = () => {
  return axios.get(`${urlStart}/articles`).then(({ data }) => {
    return data.articles;
  });
};
