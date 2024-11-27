import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaVideo, FaMobileAlt, FaNewspaper } from 'react-icons/fa';
import DemoImage from '../assets/img/2.jpg';  // Gambar untuk Demo Alat
import DashboardImage from '../assets/img/3.jpg';  // Gambar simulasi dashboard
import FAQComponent from './FaqPage';

const ExplorePage = () => {
  return (
    <div className="explore-page py-5" style={{marginTop: '50px' }}>
      <Container>
        {/* Judul Halaman */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold" style={{ color: '#002366' }}>Explore My I-Pond</h2>
            <p className="text-muted">Jelajahi keunggulan dan fitur yang ditawarkan oleh My I-Pond untuk meningkatkan kualitas budidaya ikan Anda.</p>
          </Col>
        </Row>

        {/* Studi Kasus */}
        <section className="mb-5">
            <Col md={6}>
              <h3 className="fw-bold" style={{ color: '#4090CE' }}>Studi Kasus</h3>
              <p className="text-muted">Kisah sukses petambak ikan nila yang menggunakan My I-Pond untuk memonitor kualitas air dan meningkatkan hasil panen.</p>
              <Card className="shadow-sm">
                <Card.Img variant="top" src={DemoImage} alt="Studi Kasus" />
                <Card.Body>
                  <Card.Text>
                    "Dengan My I-Pond, kami dapat memantau kualitas air setiap saat, yang membantu meningkatkan hasil panen hingga 30%."
                  </Card.Text>
                  <Button variant="primary">Baca Selengkapnya</Button>
                </Card.Body>
              </Card>
            </Col>
        </section>

        {/* Demo Alat */}
        <section className="mb-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="fw-bold" style={{ color: '#4090CE' }}>Demo Alat</h3>
              <p className="text-muted">Lihat bagaimana alat ini bekerja langsung di lapangan untuk memonitor kualitas air kolam secara real-time.</p>
              <Button variant="outline-primary" className="d-flex align-items-center">
                <FaVideo className="me-2" /> Tonton Video Demo
              </Button>
            </Col>
            <Col md={6}>
              <img src={DemoImage} alt="Demo Alat" className="img-fluid shadow rounded" />
            </Col>
          </Row>
        </section>

        {/* Keunggulan Teknologi IoT */}
        <section className="mb-5">
          <Row className="align-items-center">
            <Col md={6}>
              <img src={DashboardImage} alt="Keunggulan Teknologi IoT" className="img-fluid shadow rounded" />
            </Col>
            <Col md={6}>
              <h3 className="fw-bold" style={{ color: '#4090CE' }}>Keunggulan Teknologi IoT</h3>
              <p className="text-muted">Teknologi IoT yang kami gunakan memungkinkan data kualitas air diakses kapan saja dan di mana saja melalui aplikasi seluler atau platform cloud.</p>
              <Button variant="outline-primary" className="d-flex align-items-center">
                <FaMobileAlt className="me-2" /> Pelajari Teknologi IoT
              </Button>
            </Col>
          </Row>
        </section>

        {/* Simulasi Data */}
        <section className="mb-5">
          <Row>
            <Col>
              <h3 className="fw-bold text-center" style={{ color: '#4090CE' }}>Simulasi Data</h3>
              <p className="text-center text-muted">Lihat contoh dashboard untuk memahami bagaimana informasi kualitas air ditampilkan dan diinterpretasikan oleh pengguna.</p>
              <img src={DashboardImage} alt="Simulasi Data" className="img-fluid shadow rounded" style={{ maxWidth: '100%' }} />
            </Col>
          </Row>
        </section>

        {/* Artikel dan Update Terkini */}
        <section>
          <h3 className="fw-bold text-center" style={{ color: '#4090CE' }}>Artikel dan Update Terkini</h3>
          <Row className="mt-4">
            <Col md={4}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title><FaNewspaper className="me-2" /> Perkembangan Teknologi Akuakultur</Card.Title>
                  <Card.Text>
                    Teknologi baru dalam akuakultur dapat membantu meningkatkan produksi ikan dan menjaga kualitas lingkungan.
                  </Card.Text>
                  <Button variant="primary">Baca Selengkapnya</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title><FaNewspaper className="me-2" /> Pentingnya Kualitas Air</Card.Title>
                  <Card.Text>
                    Kualitas air yang baik adalah kunci keberhasilan dalam budidaya ikan. Pelajari cara memonitor parameter penting dalam air.
                  </Card.Text>
                  <Button variant="primary">Baca Selengkapnya</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title><FaNewspaper className="me-2" /> Dampak Kualitas Air terhadap Hasil Tambak</Card.Title>
                  <Card.Text>
                    Kualitas air yang buruk dapat mempengaruhi hasil tambak. Simak cara meningkatkan kualitas air untuk hasil yang lebih baik.
                  </Card.Text>
                  <Button variant="primary">Baca Selengkapnya</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <FAQComponent/>
      </Container>
    </div>
  );
};

export default ExplorePage;
