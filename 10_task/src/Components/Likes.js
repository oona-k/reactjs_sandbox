import React from "react";

import Col from "react-bootstrap/Col";

const Likes = ({ likes }) => {
  if (likes === 0) {
    return (
      <div>
        <p style={{ margin: "15px" }}>
          No likes yet. Be first to like this post.
        </p>
      </div>
    );
  }
  return (
    <div>
      <Col style={{ marginTop: "7px" }}>Likes: {likes}</Col>
    </div>
  );
};

export default Likes;
