import React, { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import "./Post.css";

export default function Post(
  { key, postTitle, postDescription, postAuthor, postDate, toggle = false }
) {

  const [toggleState, setToggle] = useState(toggle)

  useEffect(() => {
    setToggle(toggle)
  }, [toggle])

  return (
    <div key={key}>
      <ul className="post" onClick={() => {
        setToggle((prev) => !prev)
      }} >
        <li className="post-image">
          <img src="https://picsum.photos/200/300" alt="post" />
        </li>
        <li className="post-content">
          <div className="post-header">
            <h2 className="post-title">{postTitle}</h2>
            <p className="post-description">{postDescription}</p>
          </div>
          <div className="post-info">
            <div className="post-author">
              <img src="https://picsum.photos/200/300" alt="author" />
              <p>{postAuthor}</p>
            </div>
            <div className="post-date">
              <p>{postDate}</p>
            </div>
          </div>
        </li>
      </ul>

      {toggleState && (
        <Modal
          key={key}
          title={postTitle}
          children={postDescription}
          toggle={toggleState}
          onSubmit={() => {
            console.log("submitted");
          }}
          submitBtnText="Submit"
        />
      )}
    </div>
  );
}
