import React from "react";
import coverImage from "../assets/images/cover.jpeg"; // Import cover image
import { Container, Button } from "react-bootstrap";

const Cover = () => {
  return (
    <div
      className="cover d-flex flex-column justify-content-center align-items-center text-center text-white position-relative"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold text-shadow">Welcome To The Gallery Of Seasons</h1>
        <p className="lead fs-4 text-shadow">A Stunning Collection of Your Favorite Seasons</p>
        <div className="mt-4">
          <Button
            variant="light"
            className="mx-2 rounded-pill px-4 py-2 fw-semibold shadow-sm"
            href="#gallery"
          >
            Explore Gallery
          </Button>
          <Button
            variant="outline-light"
            className="mx-2 rounded-pill px-4 py-2 fw-semibold border-2 shadow-sm"
            href="#upload"
          >
            Upload Your Photo
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
