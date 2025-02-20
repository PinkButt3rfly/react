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
import feature3d from "../assets/images/1.jpeg";
import feature3e from "../assets/images/1.jpeg";
import feature3f from "../assets/images/1.jpeg";

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
    <Carousel interval={3000} indicators={false} controls={true}>
      {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center gap-3">
            {images.slice(index * 3, index * 3 + 3).map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                className="d-block w-30 rounded"
                alt={`Slide ${index * 3 + imgIndex + 1}`}
                style={{ width: "30%", height: "200px", objectFit: "cover" }}
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
    <Container className="gallery py-5">
      <h2 className="features text-center mb-4">Features</h2>

      <div className="mb-5">
        <h3 className="text-center mb-3">Winter</h3>
        <CarouselComponent images={carousel1Images} />
      </div>

      <div className="mb-5">
        <h3 className="text-center mb-5">Summer</h3>
        <CarouselComponent images={carousel2Images} />
      </div>

      <div className="mb-5">
        <h3 className="text-center mb-5">Autumn</h3>
        <CarouselComponent images={carousel3Images} />
      </div>

      <div className="mb-5">
        <h3 className="text-center">Spring</h3>
        <CarouselComponent images={carousel4Images} />
      </div>
    </Container>
  );
};

export default Gallery;