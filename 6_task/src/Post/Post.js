import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  return (
    <div className="post" onClick={props.click}>
      <h2>{props.title}</h2>
      <p>
        <em>{props.author}</em>
      </p>
      <p>{props.desc}</p>
      <img src={props.img} alt={props.title} />
      <div>
        <button>
          Like <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        Likes:
      </div>
    </div>
  );
};

export default Post;
