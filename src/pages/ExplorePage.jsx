import React from 'react';
import { Container } from 'react-bootstrap';
import FAQComponent from './FaqPage';

const ExplorePage = () => {
  return (
    <div className="explore-page py-5" style={{ marginTop: '50px' }}>
      <Container>
        {/* Judul Halaman */}
        <h2 className="fw-bold" style={{ color: '#002366' }}>Lokasi Kolam Penelitian</h2>
        <h4 className="mb-4 text-center">Bandung Techno Park</h4>

        {/* Peta Lokasi */}
        <div className="map-container mb-5" style={{ textAlign: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31616.078916285694!2d107.62810967732203!3d-6.972446900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e69e349e3c21%3A0xa5ef50615bcaad56!2sBandung%20Techno%20Park!5e0!3m2!1sid!2sid!4v1696078944442!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Bandung Techno Park Location"
          ></iframe>
        </div>

        {/* Komponen FAQ */}
        <FAQComponent />
      </Container>
    </div>
  );
};

export default ExplorePage;
