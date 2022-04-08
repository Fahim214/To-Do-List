import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FooterComp = () => {
  return (
    <div>
        <Container fluid className="bg-primary" style={{ height: "50px"}}>
            <Row>
                <Col style={{ margin: "10px auto", textAlign: "center"}}>
                    Copyright &copy; 2022
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComp