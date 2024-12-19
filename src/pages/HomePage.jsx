import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import IkanImage from "../assets/img/ikan.png";
import FishImage from "../assets/img/Fish.png"; // Gambar ikon ikan untuk Overview
import BenefitsComponent from "../pages/Homepage1";
import FeaturesComponent from "../pages/HomePage2";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h2 className="header-shadow mb-4">
            <span style={{ color: "#D77423" }}>Monitoring</span> Kualitas Air Tambak <br />
            Secara <span style={{ color: "#4090CE" }}>Real-Time</span>, Tingkatkan <br />
            Hasil Akuakultur Anda
</h2>

              <p 
                className="mb-2" 
                style={{ textAlign: "justify" }}
              >
                My I-Pond mampu mendeteksi parameter kualitas air
                kolam ikan. Data yang dikumpulkan disimpan di database 
                dan divisualisasikan melalui platform monitoring.
              </p>


              {/* Container Flexbox untuk kedua tombol */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {/* Tombol "Mulai Sekarang" */}
                <button
                  className="btn btn-lg rounded-3.5" onClick={() => navigate("/About")}
                  style={{
                    backgroundColor: '#071C59', // Biru tua
                    color: '#FFFFFF',           // Teks putih
                    border: '2px solid #00A2FF', // Outline biru muda
                    boxShadow: '0px 4px 10px rgba(0, 162, 255, 0.4)', // Bayangan luar biru muda
                    padding: '10px 10px',       // Tambahkan padding untuk proporsi lebih baik
                    fontSize: '16px'
                  }}
                >
                  Mulai Sekarang
                </button>

              </div>
            </Col>
            <Col lg="6" className="header-box img pt-lg-0 pt-5">
  <img 
    src={IkanImage} 
    alt="ikan-img" 
    className='animate__animated animate__fadeInUp'
    style={{ marginLeft:"20px" , width: "100%", height: "auto" }} 
  />
</Col>

          </Row>
        </Container>
      </header>
      
      {/* Gambaran Umum Section */}
      <section className="overview-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md="4" className="d-flex justify-content-center">
              <img src={FishImage} alt="Fish Icon" className="single-fish-icon" />
            </Col>
            <Col md="8">
              <h2>
                <span className="highlight">Gambaran</span> Umum
              </h2>
              <p>
                Alat ini mendeteksi kualitas air kolam ikan lele secara akurat dan menampilkan datanya secara real-time di website. Data tersebut diolah dengan machine learning untuk memprediksi pengaruh kualitas air terhadap pertumbuhan ikan. Website sebagai platform monitoring memudahkan akses bagi pengelola lele dari berbagai perangkat, kapan saja dan di mana saja.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <FeaturesComponent />
  
        <Container>
          <BenefitsComponent id="benefits-section" />
        </Container>
    </div>
  );
};

export default HomePage;