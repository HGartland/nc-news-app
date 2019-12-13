import React from "react";

const ArticleCard = ({
  title,
  topic,
  comments_count,
  created_at,
  author,
  votes
}) => {
  return (
    <section>
      <h4>{title}</h4>
      <p>
        in {topic}, score: {votes}
      </p>
      <h5>
        created by: {author} on {created_at}
      </h5>
      <p>Comments:{comments_count}</p>
    </section>
  );
};

export default ArticleCard;
