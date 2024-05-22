import React from 'react'
import './Testimonials.css'
import { Container, Row, Col } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <>
        <Container>
            <div className="testimonialsArea">
                <div className="testimonialsTitle">
                    <h5>Testimonials</h5>
                    <h2>What Do They Say About Me</h2>
                </div>
                <Row id='testimonialsHero'>
                    <Col lg={5}>
                        <div className="testimonialsImg">
                            <img src="./images/tImg.png" alt="tImg" />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="testimonialsText">
                            <p>SamCreative has been the best designer I have ever worked with. The UI designs he created are top-notch and the design system he integrated allows for straight forward fixes throughout every area of the app. I'm looking forward to partner up with him on upcoming projects. </p>
                            <h3>Iqbal Hafish</h3>
                            <h6>Project Manager, DaurUang</h6>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

export default Testimonials