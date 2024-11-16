import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import FishImage from '../assets/img/ikan.png'; 

const BenefitsComponent = () => {
  return (
    <div className="benefits-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            {/* Gambar kumpulan ikan */}
            <div className="fish-image">
              {/* Tampilkan gambar ikan dalam grid */}
              {Array(12).fill().map((_, index) => (
                <img key={index} src={FishImage} alt="Fish" style={{ width: '50px', margin: '5px' }} />
              ))}
            </div>
          </Col>
          <Col md={6}>
            {/* Teks judul dan daftar manfaat */}
            <h6 style={{ color: '#FF7E39', fontWeight: 'bold' }}>What’s My I-pond</h6>
            <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Benefits</h2>
            <Row>
              <Col xs={6} className="benefit-item">
                <FaCheckCircle style={{ color: '#4090CE', marginRight: '10px' }} />
                <span>prediksi berat ikan</span>
              </Col>
              <Col xs={6} className="benefit-item">
                <FaCheckCircle style={{ color: '#4090CE', marginRight: '10px' }} />
                <span>meningkatkan jajan 50%</span>
              </Col>
              <Col xs={6} className="benefit-item">
                <FaCheckCircle style={{ color: '#4090CE', marginRight: '10px' }} />
                <span>membangun candi</span>
              </Col>
              <Col xs={6} className="benefit-item">
                <FaCheckCircle style={{ color: '#4090CE', marginRight: '10px' }} />
                <span>nilai A, B, C, D, Ea</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BenefitsComponent;
