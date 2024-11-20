import React from 'react';
import Slide1 from "../assets/img/2.jpg";
import Slide2 from "../assets/img/3.jpg";
import Slide3 from "../assets/img/4.jpg";
import Slide4 from "../assets/img/5.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ marginTop: '50px' }}>
      <Container className="py-5">
        {/* Tentang Kami Section */}
        <section className="about-section text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#002366' }}>Tentang Kami</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '1000px' }}>
            Kami adalah tim mahasiswa yang melakukan penelitian sistem monitoring kualitas air berbasis Internet of Things (IoT) yang dilengkapi dengan model prediksi menggunakan metode machine learning. Wujud akhir dari riset ini terdiri dari gabungan komponen perangkat keras (hardware) dan perangkat lunak (software) yang terintegrasi menjadi satu sistem.
          </p>
        </section>

        {/* Swiper Section */}
        <section className="swiper-section mb-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slide1} alt="Slide 1" style={{ width: '70%', borderRadius: '10px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide2} alt="Slide 2" style={{ width: '70%', borderRadius: '10px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide3} alt="Slide 3" style={{ width: '70%', borderRadius: '10px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide4} alt="Slide 4" style={{ width: '70%', borderRadius: '10px' }} />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Tim Kami Section */}
        <section className="team-section text-center mb-5">
          <h3 className="text-primary fw-bold mb-4">Tim Kami</h3>
          <Row className="justify-content-center">
            <Col md={4} sm={6} className="mb-4">
              <Card className="p-4 shadow-sm border-0">
                <div className="team-member-icon mb-3">😊</div>
                <h5>Divany Maulidyna Putri</h5>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-4">
              <Card className="p-4 shadow-sm border-0">
                <div className="team-member-icon mb-3">😊</div>
                <h5>Devan Ramadhana</h5>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-4">
              <Card className="p-4 shadow-sm border-0">
                <div className="team-member-icon mb-3">😊</div>
                <h5>Rr Meidita Thifal</h5>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default AboutUs;
