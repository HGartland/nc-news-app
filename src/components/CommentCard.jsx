import React from "react";

const CommentCard = ({ created_at, author, votes, body }) => {
  return (
    <article className="Article-card">
      <p>score: {votes}</p>
      <h5>
        created by: {author} on {created_at}
      </h5>
      <p>{body}</p>
    </article>
  );
};

export default CommentCard;
