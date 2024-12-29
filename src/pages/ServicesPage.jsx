import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import MonitoringPage from "./Monitoring";
import MonitoringPage2 from "./Monitoring2";

const ServicesPage = () => {
  const [selectedPool, setSelectedPool] = useState("Kolam 1");

  const handlePoolChange = (e) => {
    setSelectedPool(e.target.value);
  };

  return (
    <div className="monitoring-section" style={{ backgroundColor: "#f5f9ff", padding: "100px 0" }}>
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h3>Monitoring Real-Time</h3>
            <Form.Select
              onChange={handlePoolChange}
              value={selectedPool}
              className="mb-3"
              style={{ width: "150px", margin: "0 auto" }}
            >
              <option value="Kolam 1">Kolam 1</option>
              <option value="Kolam 2">Kolam 2</option>
            </Form.Select>
            <Button variant="warning" className="rounded-pill">
              {selectedPool}
            </Button>
          </Col>
        </Row>

        {/* Conditional Rendering based on selected pool */}
        {selectedPool === "Kolam 1" ? <MonitoringPage2 /> : <MonitoringPage />}
      </Container>
    </div>
  );
};

export default ServicesPage;