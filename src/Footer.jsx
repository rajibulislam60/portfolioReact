import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
        <Container>
            <div className="footerArea">
                <Row>
                    <Col lg={5}>
                        <div className="footerTitle">
                            <h3>Get in Touch</h3>
                            <p>For business and partnership inquiry please contact me below!</p>
                        </div>
                        <div className="footerItem">
                            <div className="itembox d-flex gap-3">
                                <div className="iconBox">
                                <i className="fa-sharp fa-regular fa-circle-phone iconColor"></i>
                                </div>
                                <div className="textBox">
                                    <h6>Phone</h6>
                                    <p>0899-3415-875</p>
                                </div>
                            </div>
                            <div className="itembox d-flex gap-3">
                                <div className="iconBox">
                                <i class="fa-regular fa-circle-envelope iconColor"></i>
                                </div>
                                <div className="textBox">
                                    <h6>Email</h6>
                                    <p>dimasarsmith@gmail.com</p>
                                </div>
                            </div>
                            <div className="itembox d-flex gap-3">
                                <div className="iconBox">
                                <i class="fa-solid fa-location-dot iconColor"></i>
                                </div>
                                <div className="textBox">
                                    <h6>Address</h6>
                                    <p>Griya Japan Raya Tahap 4 B2/01, Sooko, Mojokerto</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="footerImg">
                            <img src="./images/Vector.png" alt="Vector" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

export default Footer