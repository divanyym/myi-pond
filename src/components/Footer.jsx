import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-4" style={{ backgroundColor: '#4090CE', color: '#ffffff' }}>
      <Container>
        <Row className="align-items-center justify-content-between">
          {/* Logo dan Deskripsi */}
          <Col md={4} className="text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold">My I-Pond</h4>
            <p>Solusi IoT untuk monitoring kualitas air kolam ikan Anda.</p>
          </Col>

          {/* Media Sosial */}
          <Col md={4} className="text-md-end">
            <h5 className="fw-bold mb-3 mb-md-0">Ikuti Kami</h5>
            <div className="social-icons d-flex justify-content-md-end">
              <a href="https://facebook.com" className="me-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}><FaFacebook /></a>
              <a href="https://twitter.com" className="me-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}><FaTwitter /></a>
              <a href="https://instagram.com" className="me-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}><FaInstagram /></a>
              <a href="https://linkedin.com" style={{ color: '#ffffff', fontSize: '1.5rem' }}><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Hak Cipta */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} My I-Pond. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
