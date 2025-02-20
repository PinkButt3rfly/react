import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ show, onHide, image }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{image.alt}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image.src} alt={image.alt} className="img-fluid" />
        <p className="mt-3">{image.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
