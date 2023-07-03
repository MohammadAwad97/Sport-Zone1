import React, { useState } from "react";

function CommentEdit({ comment, onSubmit }) {
  const [newTitle, setNewTitle] = useState(comment.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment.commentId, newTitle);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTitle}
          placeholder="Edit your comment"
        />
        <button className="save">Save</button>
      </form>
    </>
  );
}

export default CommentEdit;
