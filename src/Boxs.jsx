import React from 'react'
import './Boxs.css'
import { Container, Row, Col } from 'react-bootstrap'

const Boxs = () => {
  return (
    <>
    <Container>
        <div className="boxsArea">
            <Row>
                <Col lg={3}>
                    <div className="boxItem">
                        <h2 className='number'>05</h2>
                        <h5>Clients Order</h5> 
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="boxItem">
                        <h2 className='number'>03</h2>
                        <h5>Completed Projects</h5> 
                    </div>
                </Col><Col lg={3}>
                    <div className="boxItem">
                        <h2 className='number'>4.5</h2>
                        <h5>Stars Rating</h5> 
                    </div>
                </Col><Col lg={3}>
                    <div className="boxItem">
                        <h2 className='number'>06</h2>
                        <h5>Months Of Experience</h5> 
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
    </>
  )
}

export default Boxs