import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Button

 } from 'react-bootstrap';
const LelePredictionPage = () => {
  const [features, setFeatures] = useState([30, 7, 100]); 
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [model, setModel] = useState(null);
  const [autoMode, setAutoMode] = useState(false); // Mode otomatis

  useEffect(() => {
    const loadModel = async () => {
      setLoading(true);
      try {
        const loadedModel = await tf.loadLayersModel('/model/model.json'); // ganti nanti
        setModel(loadedModel);
        setLoading(false);
      } catch (err) {
        setError('Model gagal dimuat');
        setLoading(false);
      }
    };
    loadModel();
  }, []);

  useEffect(() => {
    if (autoMode) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/sensor-data'); //  URL API
          const data = await response.json();
          setFeatures([data.suhu, data.ph, data.kekeruhan, data.pakan, data.kepadatan]);
        } catch (err) {
          setError('Gagal mengambil data sensor');
        }
      };

      const interval = setInterval(fetchData, 5000); // Ambil data setiap 5 detik
      return () => clearInterval(interval);
    }
  }, [autoMode]);

  useEffect(() => {
    const predictData = async () => {
      if (features && model) {
        setLoading(true);
        setError(null);
        try {
          const inputTensor = tf.tensor2d([features]);
          const result = model.predict(inputTensor);
          setPrediction(result.dataSync()[0]);
          setLoading(false);
        } catch (err) {
          setError('Prediksi gagal');
          setLoading(false);
        }
      }
    };
    predictData();
  }, [features, model]);

  const handleInputChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const toggleMode = () => {
    setAutoMode(!autoMode);
    setPrediction(null); // Reset prediksi saat mode berubah
    setError(null); // Reset error
  };

  return (
    <div className="prediction-container">
      <div className="cardpre">
        <h5>Prediksi Pertumbuhan Ikan Lele</h5>
        <Button className="toggle-button" onClick={toggleMode}>
          {autoMode ? 'Ubah Mode Prediksi Input User' : 'Ubah Mode Prediksi Otomatis'}
        </Button>

        {autoMode ? (
          <div>
            <p>
              <br/>
              Mode otomatis aktif. Data alat sedang diproses...</p>
            {features ? (
              <div className="data-display">
                <h5>Data Sensor</h5>
                <ul>
                  <li>Suhu: {features[0]} °C</li>
                  <li>pH: {features[1]}</li>
                  <li>Kekeruhan: {features[2]} tds</li>
                  <br/>
                  <h5>Prediksi Berat ikan: {features[3]} .... g</h5>
                </ul>
              </div>
            ) : (
              <p>Menunggu data sensor...</p>
            )}
          </div>
        ) : (
          <div>
            <p>
              <br/>
              Masukkan data berikut untuk memprediksi hasil pertumbuhan ikan lele:</p>

            <div className="input-group">
              <label>Suhu (°C):</label>
              <input
                type="number"
                value={features[0]}
                onChange={(e) => handleInputChange(0, parseFloat(e.target.value))}
                placeholder="Suhu Air"
              />
            </div>

            <div className="input-group">
              <label>pH:</label>
              <input
                type="number"
                value={features[1]}
                onChange={(e) => handleInputChange(1, parseFloat(e.target.value))}
                placeholder="pH Air"
              />
            </div>

            <div className="input-group">
              <label>Kekeruhan:</label>
              <input
                type="number"
                value={features[2]}
                onChange={(e) => handleInputChange(2, parseFloat(e.target.value))}
                placeholder="Kekeruhan Air"
              />
            </div>

            <div className="input-group">
              <label>Jumlah Pakan (kg):</label>
              <input
                type="number"
                value={features[3]}
                onChange={(e) => handleInputChange(3, parseFloat(e.target.value))}
                placeholder="Jumlah Pakan"
              />
            </div>

            <div className="input-group">
              <label>Kepadatan Ikan (m2):</label>
              <input
                type="number"
                value={features[4]}
                onChange={(e) => handleInputChange(4, parseFloat(e.target.value))}
                placeholder="Kepadatan Ikan"
              />
            </div>
          </div>
        )}

        {loading && <p>Memproses prediksi...</p>}

        {prediction !== null && !loading && (
          <div className="prediction-result">
            <h3>Hasil Prediksi:</h3>
            <p>

              Berdasarkan data {autoMode ? 'alat' : 'manual'}, perkembangan ikan lele diprediksi akan
              mencapai <strong>{prediction.toFixed(2)}</strong> cm.
            </p>
          </div>
        )}

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default LelePredictionPage;
