// File: src/App.jsx
import React from "react";

const Cardinfo = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Card PH */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm" style={{ backgroundColor: "#e0f4ff", borderRadius: "15px" }}>
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">PH</h5>
              <div className="mb-3">
                <select className="form-select">
                  <option>pH Normal: 6,5 - 8,5</option>
                </select>
                <p className="mt-2">Kolam Anda normal! Tidak ada yang perlu dikhawatirkan</p>
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>pH Asam: &lt; 6,5</option>
                </select>
              </div>
              <div>
                <select className="form-select">
                  <option>pH Basa: &gt; 8,5</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Card Kekeruhan */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm" style={{ backgroundColor: "#ffe29f", borderRadius: "15px" }}>
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Kekeruhan</h5>
              <div className="mb-3">
                <select className="form-select">
                  <option>Kekeruhan Normal: 0 - 50</option>
                </select>
                <p className="mt-2">Kekeruhan Kolam Anda berada pada tahap normal!</p>
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Air Keruh</option>
                </select>
              </div>
              <div>
                <select className="form-select">
                  <option>Air Sangat Keruh</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Card Suhu */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm" style={{ backgroundColor: "#bff3d7", borderRadius: "15px" }}>
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Suhu</h5>
              <div className="mb-3">
                <select className="form-select">
                  <option>Suhu Normal: 25 - 30 °C</option>
                </select>
                <p className="mt-2">Kolam Anda berada pada suhu normal, tidak ada yg perlu dikhawatirkan!</p>
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Suhu Dingin</option>
                </select>
              </div>
              <div>
                <select className="form-select">
                  <option>Suhu Panas</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
