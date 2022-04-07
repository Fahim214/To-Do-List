import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Agenda from "../Data/Data"
import { Link, useParams } from "react-router-dom"
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState([])
  let params = useParams()
  const { id } = params

  const getDetailProduct = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/agenda/${id}`)
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailProduct()
  }, [])
  return (
    <div>
      <Container fluid style={{ width: "50%", margin: "150px auto" }}>
        <Row>
          <div>
            <Link to="/">
              <Button className="btn mb-4">
                GO BACK
              </Button>
            </Link>
          </div>
          <Col>
            <Card>
              <Card.Img variant="top" src={data.image} style={{ width: "100%"}}/>
              <Card.Body>
                <Card.Title>{data.agenda}</Card.Title>
                <Card.Text>
                  {data.detail}
                </Card.Text>
                <Button style={{ marginRight: 20}} variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
