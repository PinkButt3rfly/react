import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 w-100">
      <Container-fluid>
        <Row>
          {/* About Us Section */}
          <Col md={3}>
            <h4>About Us</h4>
            <p>We are dedicated to providing the best experience for our users. Stay connected with us!</p>
          </Col>

          {/* Quick Links Section */}
          <Col md={3}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md={3}>
            <h4>Follow Us</h4>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light fs-4"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>

          {/* Contact Section */}
          <Col md={3}>
            <h4>Contact Us</h4>
            <p>Email: galleryofseasons@gmail.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>

        <hr className="bg-light" />
        <p className="mb-0">&copy; 2025 Gallery Of Seasons | All Rights Reserved</p>
      </Container-fluid>
    </footer>
  );
};

export default Footer;



