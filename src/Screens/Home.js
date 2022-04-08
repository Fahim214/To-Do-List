import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Agenda from "../Data/Data.js";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let respon = await axios.get("http://localhost:3001/agenda");
      setData(respon.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:3001/agenda/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

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
              style={{ borderRadius: 13, marginRight: 20 }}
            />
            <Link to="/add-agenda">
              <Button style={{ textAlign: "right" }} variant="outline-primary">
                Add Agenda
              </Button>
            </Link>
          </div>
          <Col style={{ justifyContent: "center" }}>
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>No. </th>
                  <th>Agenda</th>
                  <th>Tanggal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  "Loading . . ."
                ) : (
                  <>
                    {data
                      .filter((dat) => {
                        if (search === "") {
                          return dat
                        } else if(
                          dat.bulan.toLowerCase().includes(search)
                        ) {
                          return dat
                        }
                      })
                      .map((dat, index) => (
                        <tr key={index}>
                          <td>{dat.id}</td>
                          <td>{dat.agenda}</td>
                          <td>{dat.bulan}</td>
                          <div style={{ textAlign: "center" }}>
                            <Link
                              to={`/${dat.id}`}
                              className="btn btn-primary m-1"
                            >
                              Detail
                            </Link>
                            <Button
                              className="btn btn-danger m-1"
                              onClick={() => handleDelete(dat.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </tr>
                      ))}
                  </>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
