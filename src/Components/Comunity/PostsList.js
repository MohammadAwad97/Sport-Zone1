import { useEffect, useState } from "react";
import PostShow from "./PostShow";
import axios from "axios";
import moment from "moment";

import "./Posts.css";

function PostsList() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:3001/posts`)
  .then((response) => {
    setPosts(response.data);
  }).catch((err) => console.log(err));
  } , [])

  // const fetchPosts = async () => {
  //   const response = await axios.get(`http://localhost:3001/posts`);
  //   setPosts(response.data);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:3001/posts`, {
      title: text,
      comments: [],
      time: moment().calendar(),
    });

    console.log(response.data) 
    const updatedPostsArr = [...posts, response.data];
    setPosts(updatedPostsArr);
    setText(""); // >> عشان نفضي قيمة التكست اريا
  };


  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/posts/${id}`);
    const updatedPosts = posts.filter((el) => {
      return el.id !== id;
    })
    setPosts(updatedPosts);
  }

  const postArr = posts.map((el, index) => {
    return <PostShow key={index} post={el}  onDelete={handleDelete} />;
  });
  return (
    <div className="post-Area">
      <form onSubmit={handleSubmit} className="formPosts">
        <div className="user-text">
          <img
            src="https://www.rizkventures.com/zippednyc/wp-content/uploads/2023/04/user.png"
            alt=""
          />
          <textarea
            value={text}
            onChange={handleChange}
            className="text-area"
            placeholder="Write your post here... "
          />
        </div>
        <div className="btn1">
          <button>Add Post</button>
        </div>
      </form>
      {postArr}
    </div>
  );
}

export default PostsList;
