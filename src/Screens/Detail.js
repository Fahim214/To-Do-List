import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Agenda from "../Data/Data"
import { useParams } from "react-router-dom"
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
      <Container fluid style={{ width: "50%", margin: "150px auto"}}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{data.agenda}</Card.Title>
                <Card.Text>
                  {data.detail}
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
