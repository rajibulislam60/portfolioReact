import React from 'react'
import './Tools.css'
import { Container, Row, Col } from 'react-bootstrap'

const Tools = () => {
  return (
    <>
        <Container>
            <div className="toolsArea">
                <Row>
                    <Col>
                    <div className="toolsTitle">
                    <h3>Tools and Skills</h3>
                </div>
                <div className="toolsItem d-flex justify-content-between">
                    <img src="./images/Photoshop.png" alt="Photoshop" />
                    <img src="./images/CSS.png" alt="CSS" />
                    <img src="./images/HTML.png" alt="HTML" />
                    <img src="./images/XML.png" alt="XML" />
                    <img src="./images/Photoshop.png" alt="Photoshop" />
                </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

export default Tools