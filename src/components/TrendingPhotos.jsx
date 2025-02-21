import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaComment } from "react-icons/fa";

// Import images
import trending1 from "../assets/images/sp4.jpeg";
import trending2 from "../assets/images/w3.jpeg";
import trending3 from "../assets/images/s2.jpeg";

// Data for trending photos
const trendingPhotos = [
  { id: 1, src: trending1, likes: 1020, comments: 45 },
  { id: 2, src: trending2, likes: 398, comments: 30 },
  { id: 3, src: trending3, likes: 275, comments: 20 },
];

const TrendingPhotos = () => {
  return (
    <section className="trending-photos py-5">
      <Container>
        <h2 className="trending text-center mb-4">Trending Photos</h2>
        <Row className="g-4">
          {trendingPhotos.map((photo) => (
            <Col key={photo.id} md={4}>
              <div className="photo-card position-relative overflow-hidden rounded-3 shadow-sm">
                <img
                  src={photo.src}
                  alt="Trending"
                  className="img-fluid w-100"
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="photo-overlay d-flex align-items-center justify-content-between p-3">
                  <span className="likes d-flex align-items-center gap-1">
                    <FaHeart className="text-danger" /> {photo.likes}
                  </span>
                  <span className="comments d-flex align-items-center gap-1">
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
