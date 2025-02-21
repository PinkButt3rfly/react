import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 w-100">
      <Container fluid>
        <Row className="gy-4">
          {/* About Us Section */}
          <Col md={3}>
            <h4>About Us</h4>
            <p>Gallery of Seasons is a curated platform celebrating the beauty of nature through stunning seasonal photography.</p>
          </Col>

          {/* Quick Links Section */}
          <Col md={3}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#features" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md={3}>
            <h4>Follow Us</h4>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light fs-4"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>

          {/* Contact Section */}
          <Col md={3}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:galleryofseasons@gmail.com" className="text-light">galleryofseasons@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a></p>
          </Col>
        </Row>

        <hr className="bg-light my-3" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Gallery of Seasons | All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
