import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaComment } from "react-icons/fa";

// Import images
import trending1 from "../assets/images/sp4.jpeg";
import trending2 from "../assets/images/w3.jpeg";
import trending3 from "../assets/images/s2.jpeg";

// Data for trending photos
const trendingPhotos = [
  { id: 1, src: trending1, likes: 120, comments: 45 },
  { id: 2, src: trending2, likes: 98, comments: 30 },
  { id: 3, src: trending3, likes: 75, comments: 20 },
];

const TrendingPhotos = () => {
  return (
    <section className="trending-photos py-5">
      <Container>
        <h2 className="trending text-center mb-4">Trending Photos</h2>
        <Row className="g-4">
          {trendingPhotos.map((photo) => (
            <Col key={photo.id} md={4}>
              <div className="photo-card shadow-sm rounded overflow-hidden">
                <img
                  src={photo.src}
                  alt="Trending"
                  className="img-fluid w-100"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="photo-info d-flex justify-content-between p-2 bg-light">
                  <span className="likes">
                    <FaHeart className="text-danger" /> {photo.likes}
                  </span>
                  <span className="comments">
                    <FaComment className="text-primary" /> {photo.comments}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrendingPhotos;
