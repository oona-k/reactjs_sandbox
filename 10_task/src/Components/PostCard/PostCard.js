import React from "react";
import Likes from "../Likes";

import "./PostCard.css";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookOpen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const PostCard = ({ title, img, desc, link, remove, likes, addLike }) => {
  return (
    <Col>
      <Card style={{ width: "20rem", marginBottom: "18px" }}>
        <div>
          <Card.Img variant="top" src={img} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>

            <Link to={link}>
              <Button variant="outline-info" style={{ margin: "5px" }}>
                Read more
                <FontAwesomeIcon
                  icon={faBookOpen}
                  style={{ marginLeft: "5px" }}
                />
              </Button>
            </Link>

            <Button
              variant="outline-danger"
              style={{ margin: "5px" }}
              onClick={remove}
            >
              Remove
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{ marginLeft: "5px" }}
              />
            </Button>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Button
                className="likeBtn"
                variant="outlike-secondary"
                onClick={addLike}
              >
                Like <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Likes likes={likes} />
            </Row>
          </Card.Footer>
        </div>
      </Card>
    </Col>
  );
};

export default PostCard;
