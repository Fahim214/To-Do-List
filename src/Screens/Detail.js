import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Agenda from "../Data/Data"
import { useParams } from "react-router-dom"

const Detail = () => {
    let params = useParams()
    const { id } = params
  return (
    <div>
      <Container fluid style={{ width: "50%", margin: "150px auto"}}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
