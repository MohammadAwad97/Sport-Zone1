import { useEffect, useState } from "react";
import CommentShow from "./CommentShow";
import CommentEdit from "./CommentEdit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./postShow.css";
import moment from "moment";

function PostShow({ post, onDelete }) {
  const [title, setTitle] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${post.id}`).then((response) => {
      setCommentsArr(response.data.comments);
    });
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  //Create Comments:
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.patch(
      `http://localhost:3001/posts/${post.id}`,
      {
        comments: [
          ...commentsArr,
          { title, commentId: uuidv4(), time: moment().calendar() },
        ],
      }
    );
    console.log(response.data);
    const newComment = response.data.comments; // Extract the new comment from the response
    // const updatedCommentsArr = [...commentsArr, newComment];
    setCommentsArr(newComment);
    setTitle("");
  };

  //Edit Comments:
  const handleEdit = (id, newTitle) => {
    const updatedCommentsArr = commentsArr.map((el) => {
      if (el.commentId === id) {
        return { ...el, title: newTitle };
      }
      return el;
    });
    axios
      .patch(`http://localhost:3001/posts/${post.id}`, {
        comments: updatedCommentsArr,
      })
      .then(() => {
        setCommentsArr(updatedCommentsArr);
      })
      .catch((err) => console.log(err));
  };

  //Delete Comments:
  const handleDelete = (id) => {
    const filteredComments = commentsArr.filter((el) => {
      return el.commentId !== id;
    });
    axios
      .patch(`http://localhost:3001/posts/${post.id}`, {
        comments: filteredComments,
      })
      .then(() => {
        setCommentsArr(filteredComments);
      })
      .catch((err) => console.log(err));
  };
  const allComments = commentsArr.map((comment, index) => {
    return (
      <CommentShow
        key={index}
        comment={comment}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    );
  });

  //Delete for posts: >>
  const handleClickDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="postShow">
      <div className="postSection">
        <div className="first_row">
          <img
            src="https://www.rizkventures.com/zippednyc/wp-content/uploads/2023/04/user.png"
            alt="#"
          />
          <p className="time"><span style={{fontWeight: 700}}>User1</span> {post.time}</p>
        </div>
        <p className="postText">{post.title}</p>
        <form onSubmit={handleSubmit}>
          <input
            className="commentInput"
            value={title}
            onChange={handleChange}
            placeholder="Write your comment..."
          />
          <button className="commentButton">&#11162;</button>
        </form>
        <div className="delete">
        <i
          className="fa-sharp fa-solid fa-trash"
          onClick={handleClickDelete}
        ></i><span style={{paddingLeft: "0.5em" , fontSize: "1.1em"}}>
          Delete
        </span>
        </div>
        <hr />
      </div>
      <div className="commentSection">{allComments}</div>
    </div>
  );
}

export default PostShow;

/* 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis at nulla commodi obcaecati similique in alias sequi ipsum dolores, eaque temporibus inventore vero. Harum neque inventore saepe. Tempore, consequatur.
Veniam, enim dignissimos temporibus in esse accusamus minus molestias tempora. Doloremque, labore autem eius a corporis libero, sapiente laudantium fugit quis omnis cum dolorem! Expedita consectetur facilis magnam laborum rerum.
*/
