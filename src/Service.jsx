import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './Service.css'

const Service = () => {
  return (
    <>
        <Container>
            <div className="serviceArea">
                <div className="serviceTitle">
                    <h4>What Do I Offer</h4>
                    <h2>Creates Professional Design That's Oriented Towards Client Needs</h2>
                </div>
                <div className="serviceItem">
                    <Row>
                        <Col lg={4}>
                            <div className="itemBox">
                                <img src="./images/service.png" alt="service" />
                                <h3>Content Design</h3>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="itemBox">
                                <img src="./images/service1.png" alt="service" />
                                <h3>Mobile App Design</h3>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="itemBox">
                                <img src="./images/service2.png" alt="service" />
                                <h3>Web Design</h3>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Service