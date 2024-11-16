import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTint, FaCloud, FaThermometerHalf, FaChartLine } from "react-icons/fa"; // Ikon dari react-icons

const FeaturesComponent = () => {
  return (
    <div className="features-section" style={{ backgroundColor: "#d5eaf5", padding: "50px 0" }}>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h6 style={{ color: "#FF7E39", fontWeight: "bold" }}>Learn More</h6>
            <h2 style={{ fontWeight: "bold" }}>Features</h2>
            <p>
              My I-pond Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#FFDDC1" }}>
              <FaTint size={30} color="#FF7E39" />
            </div>
            <h5 className="mt-3">pH Sensor</h5>
            <p>ijodwoandjanda jadsjadjadjsdaj</p>
          </Col>
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#C1FFD7" }}>
              <FaCloud size={30} color="#22B573" />
            </div>
            <h5 className="mt-3">Turbidity Sensor</h5>
            <p>ijodwoandjanda jadsjadjadjsdaj</p>
          </Col>
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#C1E1FF" }}>
              <FaThermometerHalf size={30} color="#4090CE" />
            </div>
            <h5 className="mt-3">Temperature Sensor</h5>
            <p>ijodwoandjanda jadsjadjadjsdaj</p>
          </Col>
          <Col md={2} className="feature-box">
            <div className="icon" style={{ backgroundColor: "#FFC1C1" }}>
              <FaChartLine size={30} color="#E74C3C" />
            </div>
            <h5 className="mt-3">Prediction</h5>
            <p>ijodwoandjanda jadsjadjadjsdaj</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesComponent;
