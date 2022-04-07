import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Agenda from "../Data/Data.js"

const Home = () => {
    const [search, setSearch] = useState("")

  return (
    <div>
      <Container className="mt-5" style={{ width: 800}}>
        <Row>
            <div className="my-4">
                <input className="p-2" placeholder="Insert Month . . ." onChange={(e) => setSearch(e.target.value)} style={{ borderRadius: 13}} />
            </div>
          <Col style={{ justifyContent: "center"}}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No. </th>
                  <th>Agenda</th>
                  <th>Tanggal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Agenda
                .filter((agend) => (
                    agend.bulan.toLowerCase().includes(search)
                ))
                .map((agend, index) => (
                    <tr key={index}>
                        <td>{agend.id}</td>
                        <td>{agend.agenda}</td>
                        <td>{agend.bulan}</td>
                        <Link to={`/${agend.id}`} className="btn btn-light m-1">
                            Detail
                        </Link>
                    </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
