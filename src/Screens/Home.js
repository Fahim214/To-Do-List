import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Agenda from "../Data/Data.js";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let respon = await axios.get("http://localhost:3001/agenda");
      setData(respon.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container style={{ width: 800, margin: "80px auto" }}>
        <Row>
          <h2 className="text-center">Agenda Bulanan Kelurahan Jatirejo</h2>
          <div className="my-4">
            <input
              className="p-2"
              placeholder="Insert Month . . ."
              onChange={(e) => setSearch(e.target.value)}
              style={{ borderRadius: 13 }}
            />
          </div>
          <Col style={{ justifyContent: "center" }}>
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
                {data
                  .filter((dat) => dat.bulan.toLowerCase().includes(search))
                  .map((dat, index) => (
                    <tr key={index}>
                      <td>{dat.id}</td>
                      <td>{dat.agenda}</td>
                      <td>{dat.bulan}</td>
                      <div>
                        <Link to={`/${dat.id}`} className="btn btn-light m-1">
                          Detail
                        </Link>
                      </div>
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
