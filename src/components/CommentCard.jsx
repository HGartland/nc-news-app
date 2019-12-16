import React from "react";

const CommentCard = ({ created_at, author, votes, body }) => {
  return (
    <section className="Article-card">
      <p>score: {votes}</p>
      <h5>
        created by: {author} on {created_at}
      </h5>
      <p>{body}</p>
    </section>
  );
};

export default CommentCard;