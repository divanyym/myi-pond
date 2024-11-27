import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';

const MoreInfoSidebar = ({ show, onHide }) => {  // Menambahkan props show dan onHide
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" style={{ width: '300px' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>More Info</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="fw-bold">Contact</ListGroup.Item>
          <ListGroup.Item>Email: info@myipond.com</ListGroup.Item>
          <ListGroup.Item>Phone: +62 123 4567</ListGroup.Item>
          <ListGroup.Item>Address: Jl. Merdeka No. 1, Jakarta</ListGroup.Item>

          <ListGroup.Item className="fw-bold mt-3">About Us</ListGroup.Item>
          <ListGroup.Item>My I-Pond adalah solusi IoT untuk monitoring kualitas air kolam ikan secara real-time.</ListGroup.Item>
          
          <ListGroup.Item className="fw-bold mt-3">Our Mission</ListGroup.Item>
          <ListGroup.Item>Kami berkomitmen untuk membantu petani ikan dalam meningkatkan kualitas air dan hasil panen.</ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MoreInfoSidebar;
