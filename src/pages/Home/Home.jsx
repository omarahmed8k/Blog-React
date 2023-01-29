import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts(json));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        {posts?.map((post, index) => (
          <div key={index}>
            <Post
              postTitle={post.title}
              postDescription={post.body}
              postImage={post.thumbnail}
              postDate="1 hour ago"
              postAuthor="John Doe"
            />
          </div>
        ))}
      </div>
    </>
  );
}
