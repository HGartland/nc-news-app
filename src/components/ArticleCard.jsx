import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({
  title,
  topic,
  comments_count,
  created_at,
  author,
  votes,
  article_id
}) => {
  return (
    <article className="Article-card">
      <Link to={`/articles/${article_id}`}>
        <h4>{title}</h4>
      </Link>
      <h5>
        created in: {topic} by: {author} on {created_at}
      </h5>
      <Voter type={"articles"} id={article_id} votes={votes} />
      <p>Comments:{comments_count}</p>
    </article>
  );
};

export default ArticleCard;
