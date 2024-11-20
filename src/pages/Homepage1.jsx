import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FishImage from '../assets/img/ikan.png'; 
import ScaleImage from '../assets/img/Fish.png';

const BenefitsComponent = () => {
  const navigate = useNavigate();

  const handleNavigateToServicesPage = () => {
    navigate('/Services'); // Pastikan '/monitoring' sesuai dengan route Anda
  };

  const benefitsData = [
    { id: 1, text: 'prediksi berat ikan', icon: ScaleImage },
    { id: 2, text: 'membangun candi', icon: ScaleImage },
    { id: 3, text: 'nilai A, B, C, D, Ea', icon: ScaleImage },
    { id: 4, text: 'meningkatkan jajan', icon: ScaleImage },
  ];

  return (
    <div className="benefits-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Bagian Kiri: Gambar Ikan dalam Grid */}
          <Col md={6} className="d-flex justify-content-center">
            <div className="fish-image">
              {Array(12).fill().map((_, index) => (
                <img key={index} src={FishImage} alt="Fish" style={{ width: '50px', margin: '5px' }} />
              ))}
            </div>
          </Col>

          {/* Bagian Kanan: Teks Judul dan Daftar Manfaat */}
          <Col md={6}>
            <h6 style={{ color: '#FF7E39', fontWeight: 'bold' }}>What’s My I-pond</h6>
            <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Benefits</h2>
            <Row>
              {benefitsData.map((benefit) => (
                <Col xs={6} className="benefit-item mb-3" key={benefit.id}>
                  <i className="bi bi-check-circle" style={{ color: '#4090CE', marginRight: '10px' }}></i>
                  <span>{benefit.text}</span>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Bagian Bawah: Card Manfaat */}
        <Row className="justify-content-center mt-5">
          {benefitsData.map((benefit) => (
            <Col key={benefit.id} md={3} sm={6} xs={12} className="mb-4">
              <Card className="shadow-sm p-3 border-0 h-100">
                <Card.Img variant="top" src={benefit.icon} alt={benefit.text} style={{ width: '80px', margin: '0 auto' }} />
                <Card.Body>
                  <Card.Text className="fw-bold">{benefit.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Tombol Cek Monitoring */}
        <div className="text-center mt-4">
          <Button 
            variant="warning" 
            className="rounded-pill px-4 py-2"
            onClick={handleNavigateToServicesPage}
          >
            Cek Monitoring &gt;
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default BenefitsComponent;
