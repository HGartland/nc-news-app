import React from "react";
import { Link } from "@reach/router";

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
      <p>
        in {topic}, score: {votes}
      </p>
      <h5>
        created by: {author} on {created_at}
      </h5>
      <p>Comments:{comments_count}</p>
    </article>
  );
};

export default ArticleCard;
