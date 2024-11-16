import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { FaCalendarAlt } from "react-icons/fa";
import "chart.js/auto"; // Untuk menghindari error pada Chart.js
import SensorGaugeComponent from "./SensorGauge";

const MonitoringComponent = () => {
  const [selectedPool, setSelectedPool] = useState("Kolam 1");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Data",
        data: [6, 7, 8, 9, 8, 7, 8],
        borderColor: "red",
        fill: false,
      },
    ],
  };

  const handlePoolChange = (e) => {
    setSelectedPool(e.target.value);
  };

  return (
    <div className="monitoring-section" style={{ backgroundColor: "#f5f9ff", padding: "20px 0" }}>
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h3>Monitoring</h3>
            <Form.Select onChange={handlePoolChange} value={selectedPool} className="mb-3" style={{ width: "150px", margin: "0 auto" }}>
              <option value="Kolam 1">Kolam 1</option>
              <option value="Kolam 2">Kolam 2</option>
            </Form.Select>
            <Button variant="warning" className="rounded-pill">
              {selectedPool}
            </Button>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <SensorGaugeComponent/>
          </Col>
        </Row>

        <h4 className="text-center mb-4">Data History</h4>

        {/* Data History Cards */}
        <Row>
          <Col md={12} className="mb-4">
            <Card className="p-3">
              <Row>
                <Col md={2} className="d-flex align-items-center">
                  <Button variant="warning" className="rounded-pill">
                    pH
                  </Button>
                </Col>
                <Col md={8}>
                  <Line data={data} />
                </Col>
                <Col md={2} className="d-flex align-items-center">
                  <FaCalendarAlt className="me-2" />
                  Start: dd/mm/yyyy
                  <br />
                  <FaCalendarAlt className="me-2" />
                  End: dd/mm/yyyy
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={12} className="mb-4">
            <Card className="p-3">
              <Row>
                <Col md={2} className="d-flex align-items-center">
                  <Button variant="success" className="rounded-pill">
                    Turbidity
                  </Button>
                </Col>
                <Col md={8}>
                  <Line data={data} />
                </Col>
                <Col md={2} className="d-flex align-items-center">
                  <FaCalendarAlt className="me-2" />
                  Start: dd/mm/yyyy
                  <br />
                  <FaCalendarAlt className="me-2" />
                  End: dd/mm/yyyy
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={12} className="mb-4">
            <Card className="p-3">
              <Row>
                <Col md={2} className="d-flex align-items-center">
                  <Button variant="primary" className="rounded-pill">
                    Temperature
                  </Button>
                </Col>
                <Col md={8}>
                  <Line data={data} />
                </Col>
                <Col md={2} className="d-flex align-items-center">
                  <FaCalendarAlt className="me-2" />
                  Start: dd/mm/yyyy
                  <br />
                  <FaCalendarAlt className="me-2" />
                  End: dd/mm/yyyy
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-center mt-5">
        <p>All rights reserved</p>
      </footer>
    </div>
  );
};

export default MonitoringComponent;
