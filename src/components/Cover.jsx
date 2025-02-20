import React from "react";
import coverImage from "../assets/images/1.jpeg"; // Import the image
import { Container } from "react-bootstrap";

const Cover = () => {
  return (
    <Container-fluid
      className="cover" 
      id="home" 
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <h1>Welcome To The Gallery Of Seasons</h1>
      <p className="lead">A Stunning Collection of Your Favorite Seasons</p>
    </Container-fluid>
  );
};

export default Cover;

