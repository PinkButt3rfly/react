
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

// Import images from assets
import feature1a from "../assets/images/w1.jpeg";
import feature1b from "../assets/images/w2.jpeg";
import feature1c from "../assets/images/w3.jpeg";
import feature1d from "../assets/images/w4.jpeg";
import feature1e from "../assets/images/w5.jpeg";
import feature1f from "../assets/images/w6.jpeg";

import feature2a from "../assets/images/s4.jpeg";
import feature2b from "../assets/images/s5.jpeg";
import feature2c from "../assets/images/s6.jpeg";
import feature2d from "../assets/images/s1.jpeg";
import feature2e from "../assets/images/s2.jpeg";
import feature2f from "../assets/images/s3.jpeg";

import feature3a from "../assets/images/1.jpeg";
import feature3b from "../assets/images/2.jpeg";
import feature3c from "../assets/images/3.jpeg";
import feature3d from "../assets/images/4.jpeg";
import feature3e from "../assets/images/5.jpeg";
import feature3f from "../assets/images/6.jpeg";

import feature4a from "../assets/images/sp4.jpeg";
import feature4b from "../assets/images/sp2.jpeg";
import feature4c from "../assets/images/sp3.jpeg";
import feature4d from "../assets/images/sp1.jpeg";
import feature4e from "../assets/images/sp5.jpeg";
import feature4f from "../assets/images/sp6.jpeg";

// Image Arrays for each carousel
const carousel1Images = [feature1a, feature1b, feature1c, feature1d, feature1e, feature1f];
const carousel2Images = [feature2a, feature2b, feature2c, feature2d, feature2e, feature2f];
const carousel3Images = [feature3a, feature3b, feature3c, feature3d, feature3e, feature3f];
const carousel4Images = [feature4a, feature4b, feature4c, feature4d, feature4e, feature4f];

// Carousel Component (Displays 3 images per slide)
const CarouselComponent = ({ images }) => {
  return (
    <Carousel interval={4000} indicators={false} controls={true} className="gallery-carousel">
      {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center gap-3">
            {images.slice(index * 3, index * 3 + 3).map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                className="gallery-image"
                alt={`Slide ${index * 3 + imgIndex + 1}`}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const Gallery = () => {
  return (
    <Container className="gallery py-5 text-center">
      <h2 className="gallery-title">Seasonal Gallery</h2>

      <div className="gallery-section">
        <h3 className="gallery-subtitle">Winter</h3>
        <CarouselComponent images={carousel1Images} />
      </div>

      <div className="gallery-section">
        <h3 className="gallery-subtitle">Summer</h3>
        <CarouselComponent images={carousel2Images} />
      </div>

      <div className="gallery-section">
        <h3 className="gallery-subtitle">Autumn</h3>
        <CarouselComponent images={carousel3Images} />
      </div>

      <div className="gallery-section">
        <h3 className="gallery-subtitle">Spring</h3>
        <CarouselComponent images={carousel4Images} />
      </div>
    </Container>
  );
};

export default Gallery;
