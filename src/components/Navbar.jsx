import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg" className="w-100">
      <Container fluid>
        <Navbar.Brand href="#">GalleryOfSeasons</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#uploads">Upload</Nav.Link>
            <Nav.Link href="#gallery">About</Nav.Link>
            <Nav.Link href="login.html">Login/Sign-Up</Nav.Link>
            <Nav.Link href="taskManager.html">Task Manager</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


