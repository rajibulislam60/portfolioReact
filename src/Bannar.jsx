import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Bannar.css'

const Bannar = () => {
  return (
    <>
        <Container>
            <div className="bannarArea">
               <Row>
                    <Col lg={7}>
                        <div className="bannarText">
                            <h3>Hello Buds</h3>
                            <h1>I am <span>Dimas Ardiansyah</span></h1>
                            <h5>UI/UX Design Enthusiast</h5>
                            <p>I'm a person who has a keen interest in the design layout. I think presenting an attractive design is a matter of concern in developing a branding of products. To creates a good design,  I focus on proper composition and visual decoration details in order to make it more professional. For the time being, I'm developing the skill for acquiring the UI/UX design for dynamic application and web development.</p>
                            <div className="bannarBtn d-flex gap-3">
                                <Button id='bBtn'>Download CV</Button>
                                <Button id='bBtn'>More</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img className='imgArea' src="./images/hero.png" alt="hero" />
                    </Col>
                </Row> 
            </div>
            
        </Container>
    </>
  )
}

export default Bannar