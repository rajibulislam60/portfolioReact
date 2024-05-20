import React from 'react'
import {Container, Nav, Navbar, Button,} from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="body-tertiary navbarArea">
      <Container>
        <Navbar.Brand href="#home"><img src="./images/logo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3">
            <Nav.Link className='list' color="white" href="#">Home</Nav.Link>
            <Nav.Link className='list' href="#">About</Nav.Link>
            <Nav.Link className='list' href="#">Project</Nav.Link>
            <Nav.Link className='list' href="#">Blog</Nav.Link>
            <Button variant="dark" id='btn' >Contact Me</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header