import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ScaleImage from '../assets/img/Fish.png';
import ManfaatImage from '../assets/img/manfaat.png';

const BenefitsComponent = () => {
  const navigate = useNavigate();

  const handleNavigateToMonitoring = () => {
    navigate('/Monitoring'); // Pastikan '/monitoring' sesuai dengan route Anda
  };

  const benefitsData = [
    { id: 1, text: 'Prediksi dari berat bibit ikan lele', icon: ScaleImage },
    { id: 2, text: 'Memaksimalkan pertumbuhan ikan', icon: ScaleImage },
    { id: 3, text: 'Memantau kondisi kolam ikan', icon: ScaleImage },
    { id: 4, text: 'Mengurangi resiko kematian bibit ikan', icon: ScaleImage },
  ];

  return (
    <div className="benefits-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Bagian Kiri: Gambar Ikan dalam Grid */}
          <Col md={6} className="d-flex justify-content-center">
            <div>
              {<img src={ManfaatImage} style={{ width: '550px' }} />
              }
            </div>
          </Col>

          {/* Bagian Kanan: Teks Judul dan Daftar Manfaat */}
          <Col md={6}>
            <h6 style={{ color: '#FF7E39', fontWeight: 'bold' }}>Mengetahui</h6>
            <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Manfaat My I-Pond</h3>
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


        {/* Tombol Cek Monitoring */}
        <br/>
        <br/>
        <div className="text-center mt-4">
          <Button 
            variant="warning" 
            className="rounded-pill px-4 py-2"
            onClick={handleNavigateToMonitoring}
          >
            Cek Monitoring &gt;
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default BenefitsComponent;
