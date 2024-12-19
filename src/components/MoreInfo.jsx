import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';

const MoreInfoSidebar = ({ show, onHide }) => {  // Menambahkan props show dan onHide
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" style={{ width: '300px' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Info</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="fw-bold">Contact</ListGroup.Item>
          <ListGroup.Item>Email: divanydyna09@gmail.com</ListGroup.Item>
          <ListGroup.Item>Phone: +6282320860090 </ListGroup.Item>

          <ListGroup.Item className="fw-bold mt-3">Halo!</ListGroup.Item>
          <ListGroup.Item>My I-Pond adalah solusi IoT untuk monitoring kualitas air kolam ikan secara real-time.</ListGroup.Item>
          
          <ListGroup.Item className="fw-bold mt-3">Misi Kami</ListGroup.Item>
          <ListGroup.Item>Kami berkomitmen untuk membantu petani ikan dalam meningkatkan kualitas air dan hasil panen.</ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MoreInfoSidebar;
