import React from 'react';
import NebarImage from "../assets/img/nebar my-ipond.png";
import Slideshow from '../components/Slideshow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about-us-container">
      <Container className="py-5">
        {/* Tentang Kami Section */}
        <section className="about-section text-center mb-5">
          <h2 className="text-primary fw-bold mb-3">Tentang Kami</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Kami adalah tim mahasiswa yang melakukan penelitian sistem monitoring kualitas air berbasis Internet of Things (IoT) yang dilengkapi dengan model prediksi menggunakan metode machine learning. Wujud akhir dari riset ini terdiri dari gabungan komponen perangkat keras (hardware) dan perangkat lunak (software) yang terintegrasi menjadi satu sistem.
          </p>

          
          <div className="images-container d-flex justify-content-center">
            <img src={NebarImage} alt="nebar my-ipond" style={{ width: '80%', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
          </div>
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
            <SwiperSlide><Card className="p-5 text-center">Slide 1</Card></SwiperSlide>
            <SwiperSlide><Card className="p-5 text-center">Slide 2</Card></SwiperSlide>
            <SwiperSlide><Card className="p-5 text-center">Slide 3</Card></SwiperSlide>
            <SwiperSlide><Card className="p-5 text-center">Slide 4</Card></SwiperSlide>
            <SwiperSlide><Card className="p-5 text-center">Slide 5</Card></SwiperSlide>
          </Swiper>
        </section>

        {/* Tim Kami Section */}
        <section className="team-section text-center mb-5">
          <h3 className="text-primary fw-bold mb-4">Tim Kami</h3>
          <Row className="justify-content-center">
            <Col md={4} sm={6} className="mb-4">
              <Card className="p-4 shadow-sm border-0">
                <div className="team-member-icon mb-3">😊</div>
                <h5>Divney</h5>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-4">
              <Card className="p-4 shadow-sm border-0">
                <div className="team-member-icon mb-3">😊</div>
                <h5>Member 2</h5>
              </Card>
            </Col>
            <Col md={4} sm={6} className="mb-4">
              <Card className="p-4 shadow-sm border-0">
                <div className="team-member-icon mb-3">😊</div>
                <h5>Member 3</h5>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Footer */}
        <footer className="footer text-center mt-5">
          <p className="text-muted">© 2023 My I-pond. All rights reserved.</p>
        </footer>
      </Container>
    </div>
  );
}

export default AboutUs;
