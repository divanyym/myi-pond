import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTint, FaCloud, FaThermometerHalf, FaChartLine } from "react-icons/fa"; // Ikon dari react-icons

const FeaturesComponent = () => {
  return (
    <div className="features-section" style={{ padding: "50px 0" }}>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h6 style={{ color: "#FF7E39", fontWeight: "bold" }}>Pelajari Lebih Lanjut</h6>
            <h3 style={{ fontWeight: "bold" }}>Fitur My I-Pond</h3>
            <p>
            My I-Pond dilengkapi fitur canggih untuk memantau kondisi kolam bibit ikan lele, memastikan lingkungan tetap optimal demi pertumbuhan ikan yang sehat
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#FFDDC1" }}>
              <FaTint size={30} color="#FF7E39" />
            </div>
            <h5 className="mt-3">Sensor pH</h5>
            <p>Mengukur tingkat keasaman air untuk menjaga kualitas</p>
          </Col>
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#C1FFD7" }}>
              <FaCloud size={30} color="#22B573" />
            </div>
            <h5 className="mt-3">Sensor Kekeruhan</h5>
            <p>Memantau kekeruhan air untuk kebersihan kolam</p>
          </Col>
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#C1E1FF" }}>
              <FaThermometerHalf size={30} color="#4090CE" />
            </div>
            <h5 className="mt-3">Sensor Temperatur</h5>
            <p>Mengawasi suhu air agar tetap stabil</p>
          </Col>
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#FFC1C1" }}>
              <FaChartLine size={30} color="#E74C3C" />
            </div>
            <h5 className="mt-3">Prediksi</h5>
            <p>Memprediksi berat ikan berdasarkan data sensor</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesComponent;
