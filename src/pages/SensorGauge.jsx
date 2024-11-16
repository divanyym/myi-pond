import React from "react";
import GaugeChart from "react-gauge-chart";
import { Container, Row, Col, Card } from "react-bootstrap";

const SensorGaugeComponent = () => {
  return (
    <div className="sensor-gauge-section" style={{ padding: "20px 0" }}>
      <Container>
      <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="p-3 text-center">
              <h6 className="sensor-title">pH Sensor</h6>
              <GaugeChart
                id="ph-gauge"
                nrOfLevels={10}
                colors={["#FF0000", "#FFFF00", "#00FF00", "#0000FF"]}
                arcWidth={0.3}
                percent={6.61 / 14}
                textColor="#000"
                formatTextValue={() => "6.61"}
                style={{ width: "80%" }} // Memastikan gauge lebih proporsional
              />
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="p-3 text-center">
              <h6 className="sensor-title">Turbidity Sensor</h6>
              <GaugeChart
                id="turbidity-gauge"
                nrOfLevels={10}
                colors={["#00CFFF", "#00FF00", "#FFFF00", "#FF0000"]}
                arcWidth={0.3}
                percent={25.81 / 40}
                textColor="#000"
                formatTextValue={() => "25.81 NTU"}
                style={{ width: "80%" }}
              />
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="p-3 text-center">
              <h6 className="sensor-title">Temperature Sensor</h6>
              <GaugeChart
                id="temperature-gauge"
                nrOfLevels={10}
                colors={["#00FF00", "#FFFF00", "#FF0000"]}
                arcWidth={0.3}
                percent={1530.24 / 1000}
                textColor="#000"
                formatTextValue={() => "1530.24°C"}
                style={{ width: "80%" }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SensorGaugeComponent;