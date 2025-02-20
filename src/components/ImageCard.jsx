import React from 'react';
import { Card } from 'react-bootstrap';

const ImageCard = ({ src, title }) => {
  return (
    <Card className="shadow-sm border-0">
      <Card.Img variant="top" src={src} alt={title} className="img-fluid" />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;

