import React from 'react';
import GaugeChart from 'react-gauge-chart';
import "../dist/css/monitoring.css";



const Monitoring = () => {
  return (
    <div className="monitoring-container">
      <h2 className="monitoring-title">Monitoring</h2>
      <button className="select-pond-button">Pilih Kolam</button>
      
      <div className="sensor-cards">
        {/* pH Sensor */}
        <div className="sensor-card">
          <h3>pH Sensor</h3>
          <GaugeChart 
            id="ph-gauge"
            nrOfLevels={14}
            colors={["#ff0000", "#f1c40f", "#2ecc71", "#8e44ad"]}
            arcWidth={0.3}
            percent={6.61 / 14} // Sesuaikan nilai pH
            textColor="#000000"
          />
          <p className="sensor-value">6.61</p>
        </div>

        {/* Turbidity Sensor */}
        <div className="sensor-card">
          <h3>Turbidity Sensor</h3>
          <GaugeChart 
            id="turbidity-gauge"
            nrOfLevels={40}
            colors={["#00c8ff", "#2ecc71", "#ff0000"]}
            arcWidth={0.3}
            percent={25.81 / 40} // Sesuaikan nilai Turbidity
            textColor="#000000"
          />
          <p className="sensor-value">25.81°C</p>
        </div>

        {/* Temperature Sensor */}
        <div className="sensor-card">
          <h3>Temperature Sensor</h3>
          <GaugeChart 
            id="temperature-gauge"
            nrOfLevels={1000}
            colors={["#RED", "#f1c40f", "#ff0000"]}
            arcWidth={0.3}
            percent={530.24 / 1000} // Sesuaikan nilai Temperature
            textColor="#000000"
          />
          <p className="sensor-value">530.24 NTU</p>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;
