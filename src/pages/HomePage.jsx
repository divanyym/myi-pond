import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import IkanImage from "../assets/img/ikan.png";
import FishImage from "../assets/img/fish.png"; // Gambar ikon ikan untuk Overview
import BenefitsComponent from "../pages/Homepage1";
import FeaturesComponent from "../pages/HomePage2";
import { FaArrowDown } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="header-shadow mb-4">
                We Create <br />
                <span style={{ color: "#4090CE" }}>solutions</span> with IoT for <br />
                your fish pond business
              </h1>
              <p className="mb-4">
                Our team keeps a keen eye on emerging ponds control and technologies such as IoT system and machine learning 
                to ensure healthy and good growth of catfish.
              </p>

              {/* Container Flexbox untuk kedua tombol */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {/* Tombol "Mulai Sekarang" */}
                <button
                  className="btn btn-lg rounded-3"
                  style={{
                    backgroundColor: '#002366', // Biru tua
                    color: '#FFFFFF',           // Teks putih
                    border: '2px solid #00A2FF', // Outline biru muda
                    boxShadow: '0px 4px 10px rgba(0, 162, 255, 0.4)', // Bayangan luar biru muda
                    padding: '10px 20px',       // Tambahkan padding untuk proporsi lebih baik
                    fontWeight: 'bold'
                  }}
                >
                  Mulai Sekarang
                </button>

                {/* Tombol "Pelajari Lebih Lanjut" */}
                <button
                  className="btn btn-lg rounded-3 d-flex align-items-center"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#000000',            // Teks hitam
                    fontWeight: 'bold',
                    border: 'none',
                    padding: '10px 20px',
                    display: 'flex',             // Menggunakan Flexbox pada tombol
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaArrowDown style={{ color: '#D77423', marginRight: '8px' }} /> 
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={IkanImage} alt="ikan-img" className="w-100" />
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
