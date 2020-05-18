import React from "react";

import Col from 'react-bootstrap/Col';

const Likes = ({ likes }) => {
  console.log(likes);
  if (likes === 0) {
    return (
      <div>
        <p>No likes yet. Be first to like this post.</p>
      </div>
    );
  }
  return (
    <div>
        <Col>
       Likes: {likes}
       </Col>
    </div>
  );
};

export default Likes;
