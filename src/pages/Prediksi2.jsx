import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ref, onValue } from "firebase/database";
import { db1 } from "./../firebase";


// Komponen untuk menampilkan data sensor
function SensorGauges2() {
  const [pHValue, setPHValue] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [turbidity, setTurbidity] = useState(0);
  const [prediction, setPrediction] = useState("Loading...");

  useEffect(() => {
    const phRef = ref(db1, "/Data_MyIpond/Data_RealTime/PH_AIR");
    const unsubscribePh = onValue(phRef, (snapshot) => {
      setPHValue(snapshot.val());
    });

    const temperatureRef = ref(db1, "/Data_MyIpond/Data_RealTime/SUHU_AIR");
    const unsubscribeTemperature = onValue(temperatureRef, (snapshot) => {
      setTemperature(snapshot.val());
    });

    const turbidityRef = ref(db1, "/Data_MyIpond/Data_RealTime/KEKERUHAN_AIR");
    const unsubscribeTurbidity = onValue(turbidityRef, (snapshot) => {
      setTurbidity(snapshot.val());
    });
    const dataRef = ref(db1, "/Data_MyIpond/HasilPrediksi/Prediksi/Isi");

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data dari Firebase:", data); // Debugging untuk melihat data yang diterima
      setPrediction(data || "Data tidak tersedia");
    });


    return () => {
      unsubscribePh();
      unsubscribeTemperature();
      unsubscribeTurbidity();
      unsubscribe();
    };
  }, []);

  return (
    <div className="sensor-gauge-section" style={{ padding: "100px", textAlign: "center" }}>
            <h4 className="mb-4">Kondisi Kolam 2</h4>
            <p style={{ fontSize: "1.2rem", color: "#555" }}>
               Halo petambak, kondisi kolam kamu{" "}
              <span style={{ fontWeight: "bold", color: "#007bff" }}>{prediction}</span>.
            </p>
      <Container>
        <Row className="justify-content-center">
          {/* pH Sensor */}
          <Col md={4} className="mb-4">
            <Card className="gauge-card text-center p-4 shadow" style={{ borderRadius: "15px" }}>
              <h5 style={{ color: "#333", marginBottom: "20px" }}>Sensor pH</h5>
              <p style={{ fontSize: "1.3em", fontWeight: "bold", color: "#555" }}>
                Nilai pH Kolam Anda adalah: {pHValue}
              </p>
            </Card>
          </Col>

          {/* Temperature Sensor */}
          <Col md={4} className="mb-4">
            <Card className="gauge-card text-center p-4 shadow" style={{ borderRadius: "15px" }}>
              <h5 style={{ color: "#333", marginBottom: "20px" }}>Sensor Suhu</h5>
              <p style={{ fontSize: "1.3em", fontWeight: "bold", color: "#555" }}>
                Suhu Kolam Anda adalah: {temperature} ºC
              </p>
            </Card>
          </Col>

          {/* Turbidity Sensor */}
          <Col md={4} className="mb-4">
            <Card className="gauge-card text-center p-4 shadow" style={{ borderRadius: "15px" }}>
              <h5 style={{ color: "#333", marginBottom: "20px" }}>Sensor Kekeruhan</h5>
              <p style={{ fontSize: "1.3em", fontWeight: "bold", color: "#555" }}>
                Kekeruhan Air adalah: {turbidity} NTU
              </p>
            </Card>
          </Col>

          
          
          
        </Row>
      </Container>
    </div>
  );
}

export default SensorGauges2;

