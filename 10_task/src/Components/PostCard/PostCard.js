import React from "react";

// import "./PostCard.css";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const PostCard = ({ title, img, desc, link, remove }) => {
  return (
    <Col>
    <Card style={{ width: "20rem", marginBottom:"18px" }} >
      
      <div /* className="postCard" */>
        <Card.Img variant="top" src={img} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>

          <Link to={link}>
            <Button variant="outline-info" style={{margin: "5px"}}>Read more</Button>
          </Link>

          <Button variant="outline-danger" style={{margin: "5px"}} onClick={remove}>
            Remove 
          </Button>
        </Card.Body>
      </div>
    </Card>
    </Col>
  );
};

export default PostCard;
