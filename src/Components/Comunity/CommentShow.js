import { useState } from "react";
import "./CommentShow.css";
import CommentEdit from "./CommentEdit";

function CommentShow({ comment, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(comment.commentId);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <p style={{paddingLeft: "4em"}}>{comment.title}</p>; 
  if (showEdit) {
    content = <CommentEdit onSubmit={handleSubmit} comment={comment} />;
  }

  return (
    <div className="commentShow">
      <div className="imgComment">
        <img
          style={{ width: "50px" }}
          alt="CommentPic"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
        />
        <div className="commentText">
          <p className="time">
            <span style={{}}>
              <a
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.1em",
                  color: "orange",
                }}
                href="/"
              >
                Jode
              </a>
            </span>{" "}
            {comment.time}
          </p>
          
        </div>
        
      </div>
      {content}
      <div className="edit-delete">
        <i onClick={handleDelete} class="fa-sharp fa-solid fa-trash"></i>
        <span style={{margin: "0 5px"}}>Delete</span>
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
      </div>
    </div>
  );
}

export default CommentShow;
