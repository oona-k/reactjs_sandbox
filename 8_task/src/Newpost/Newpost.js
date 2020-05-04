import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Newpost = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col md={3}>
          <div></div>
        </Col>
        <Col md={6}>
          <div>
            <h2>New post</h2>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridTopic">
                <Form.Label>Topic</Form.Label>
                <Form.Control placeholder="Enter topic" />
              </Form.Group>

              <Form.Group controlId="ControlTextarea">
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Newpost;
