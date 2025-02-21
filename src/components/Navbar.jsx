import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="w-100 py-3 shadow-sm">
      <Container fluid>
        {/* Brand Name */}
        <Navbar.Brand href="#" className="fw-bold fs-4 text-light">
          GalleryOfSeasons
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="navbarNav" className="border-0" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home" className="mx-3 text-light fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mx-3 text-light fw-semibold">
              Features
            </Nav.Link>
            <Nav.Link href="/login" className="mx-3 text-light fw-semibold">
              Login / Sign-Up
            </Nav.Link>
          </Nav>

          {/* Modernized Search Bar (Rounded and Stylish) */}
          <Form className="d-flex ms-auto mt-3 mt-lg-0" style={{ maxWidth: "300px" }}>
            <FormControl
              type="search"
              placeholder="Search Gallery..."
              className="rounded-pill px-3 py-2 border-0"
              style={{
                backgroundColor: "#f8f9fa",
                color: "#333",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
