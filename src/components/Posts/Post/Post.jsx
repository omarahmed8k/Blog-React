import React from "react";
import "./Post.css";

export default function Post(props) {
  return (
    <ul className="post" key={props.index} onClick={() => {
      props.onClick()
    }
    } >
      <li className="post-image">
        <img src="https://picsum.photos/200/300" alt="post" />
      </li>
      <li className="post-content">
        <div className="post-header">
          <h2 className="post-title">{props.postTitle}</h2>
          <p className="post-description">{props.postDescription}</p>
        </div>
        <div className="post-info">
          <div className="post-author">
            <img src="https://picsum.photos/200/300" alt="author" />
            <p>{props.postAuthor}</p>
          </div>
          <div className="post-date">
            <p>{props.postDate}</p>
          </div>
        </div>
      </li>
    </ ul>
  );
}
