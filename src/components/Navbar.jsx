import React from "react";
import { Navbar, Nav, Container, Image, Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import profilePic from "../assets/images/s1.jpeg"; 
import "../Styles/Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="navbar-brand">
          <span className="brand-text">Seasons Gallery</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="toggle-icon" />
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
          </Nav>

          {/* Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle className="profile-dropdown" id="dropdown-basic">
              <Image src={profilePic} roundedCircle className="profile-pic" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
