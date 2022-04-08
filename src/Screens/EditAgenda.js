import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const AddAgenda = () => {
  const [agenda, setAgenda] = useState("")
  const [bulan, setBulan] = useState("")
  const [detail, setDetail] = useState("")
  const [image, setImage] = useState("")

  const { id } = useParams()

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let dataAgenda = { agenda, bulan, detail, image}

      let res = await axios.put(`http://localhost:3001/agenda/${id}`, dataAgenda)
      console.log(res.data);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <Container style={{ width: 500, margin: "80px auto" }}>
        <Row>
          <h3>Edit Agenda</h3>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Agenda</Form.Label>
                <Form.Control type="text" placeholder="Agenda Name" value={agenda} onChange={(e) => setAgenda(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control type="month" placeholder="Nama Agenda" value={bulan} onChange={(e) => setBulan(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail</Form.Label>
                <Form.Control as="textarea" rows={3} value={detail} onChange={(e) => setDetail(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>URL image</Form.Label>
                <Form.Control type="text" placeholder="Insert Url Image . . ." value={image} onChange={(e) => setImage(e.target.value)}/>
              </Form.Group>
              <Button type="submit">Add</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
};

export default AddAgenda;
