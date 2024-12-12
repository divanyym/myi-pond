import React, { useState, useEffect } from "react";
import GaugeComponent from "react-gauge-component";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ref, onValue } from "firebase/database";
import { db1 } from "../../firebase";  // Pastikan ini mengarah ke konfigurasi Firebase Anda

function SensorGauges() {
  const [pHValue, setPHValue] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [turbidity, setTurbidity] = useState(0);

  useEffect(() => {
    const phRef = ref(db1, "/Data_Alat2/Data_RealTime/PH_AIR");
    const unsubscribePh = onValue(phRef, (snapshot) => {
      setPHValue(snapshot.val());
    });

    const temperatureRef = ref(db1, "/Data_Alat2/Data_RealTime/SUHU_AIR");
    const unsubscribeTemperature = onValue(temperatureRef, (snapshot) => {
      setTemperature(snapshot.val());
    });

    const turbidityRef = ref(db1, "/Data_Alat2/Data_RealTime/KEKERUHAN_AIR");
    const unsubscribeTurbidity = onValue(turbidityRef, (snapshot) => {
      setTurbidity(snapshot.val());
    });

    return () => {
      unsubscribePh();
      unsubscribeTemperature();
      unsubscribeTurbidity();
    };
  }, []);

  return (
    <div className="sensor-gauge-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="gauge-card text-center p-4 shadow" style={{ borderRadius: "15px" }}>
              <h5 className="mb-3" style={{ color: "#333" }}>pH Sensor</h5>
              <GaugeComponent
                type="semicircle"
                arc={{
                  width: 0.2,
                  padding: 0.005,
                  cornerRadius: 1,
                  subArcs: [
                    { limit: 0, color: '#FF0000', showTick: true, tooltip: { text: 'pH Sangat Asam' } },
                    { limit: 3, color: '#FF0000', showTick: true, tooltip: { text: 'pH Terlalu Asam' } },
                    { limit: 6, color: '#ffff00', showTick: true, tooltip: { text: 'pH Asam' } },
                    { limit: 8.5, color: '#5BE12C', showTick: true, tooltip: { text: 'pH Normal' } },
                    { limit: 11, color: '#004FA7', showTick: true, tooltip: { text: 'pH Basa' } },
                    { limit: 14, color: '#4c00a4', showTick: true, tooltip: { text: 'pH Terlalu Basa' } }
                  ]
                }}
                pointer={{ color: '#CCF2B9', length: 0.8, width: 14 }}
                labels={{
                  valueLabel: { formatTextValue: value => `${value} pH` },
                  tickLabels: {
                    type: 'outer',
                    valueConfig: { formatTextValue: value => value, fontSize: 10 },
                    ticks: []
                  }
                }}
                value={pHValue}
                minValue={0}
                maxValue={14}
                style={{ width: "100%", maxWidth: "200px", margin: "auto" }}
              />
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="gauge-card text-center p-4 shadow" style={{ borderRadius: "15px" }}>
              <h5 className="mb-3" style={{ color: "#333" }}>Temperature Sensor</h5>
              <GaugeComponent
                type="semicircle"
                arc={{
                  width: 0.2,
                  padding: 0.005,
                  cornerRadius: 1,
                  subArcs: [
                    { limit: 0, color: '#FF0000', showTick: true, tooltip: { text: 'Suhu Air Sangat Dingin' } },
                    { limit: 12, color: '#94f7ff', showTick: true, tooltip: { text: 'Suhu Air Dingin' } },
                    { limit: 22, color: '#3fd0d4', showTick: true, tooltip: { text: 'Suhu Air Sejuk' } },
                    { limit: 30, color: '#5BE12C', showTick: true, tooltip: { text: 'Suhu Air Normal' } },
                    { limit: 40, color: '#FF0000', showTick: true, tooltip: { text: 'Suhu Air Sangat Panas' } }
                  ]
                }}
                pointer={{ color: '#CCF2B9', length: 0.8, width: 14 }}
                labels={{
                  valueLabel: { formatTextValue: value => `${value} ºC` },
                  tickLabels: {
                    type: 'outer',
                    valueConfig: { formatTextValue: value => value + ' ºC', fontSize: 10 },
                    ticks: []
                  }
                }}
                value={temperature}
                minValue={0}
                maxValue={40}
                style={{ width: "100%", maxWidth: "200px", margin: "auto" }}
              />
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="gauge-card text-center p-4 shadow" style={{ borderRadius: "15px" }}>
              <h5 className="mb-3" style={{ color: "#333" }}>Turbidity Sensor</h5>
              <GaugeComponent
                type="semicircle"
                arc={{
                  width: 0.2,
                  padding: 0.005,
                  cornerRadius: 1,
                  subArcs: [
                    { limit: 0, color: '#FF0000', showTick: true, tooltip: { text: 'Air Sangat Jernih' } },
                    { limit: 100, color: '#5BE12C', showTick: true, tooltip: { text: 'Air Jernih' } },
                    { limit: 500, color: '#ffff00', showTick: true, tooltip: { text: 'Air Keruh' } },
                    { limit: 1000, color: '#FF0000', showTick: true, tooltip: { text: 'Air Sangat Keruh' } }
                  ]
                }}
                pointer={{ color: '#CCF2B9', length: 0.8, width: 14 }}
                labels={{
                  valueLabel: { formatTextValue: value => `${value} NTU` },
                  tickLabels: {
                    type: 'outer',
                    valueConfig: { formatTextValue: value => value + ' NTU', fontSize: 10 },
                    ticks: []
                  }
                }}
                value={turbidity}
                minValue={0}
                maxValue={1000}
                style={{ width: "100%", maxWidth: "200px", margin: "auto" }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SensorGauges;
