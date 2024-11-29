import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';

const FAQComponent = () => {
  const faqData = [
    {
      question: "Apa itu My I-Pond?",
      answer: "My I-Pond adalah solusi berbasis IoT untuk monitoring kualitas air kolam ikan, dilengkapi dengan prediksi machine learning untuk pertumbuhan ikan.",
    },
    {
      question: "Bagaimana cara kerja alat ini?",
      answer: "Alat ini mengumpulkan data kualitas air secara real-time dan menampilkannya melalui dashboard yang dapat diakses kapan saja dan di mana saja.",
    },
    {
      question: "Apakah data dapat diakses dari jarak jauh?",
      answer: "Ya, data dapat diakses secara online melalui website kami. Sehingga Anda dapat memantau kualitas air kolam dari mana saja.",
    },
    {
      question: "Apakah alat ini ramah lingkungan?",
      answer: "Ya, alat ini didesain untuk efisiensi energi dan tidak menghasilkan polusi. Kami menggunakan teknologi yang ramah lingkungan dalam setiap komponen.",
    }
  ];

  return (
    <section className="faq-section py-5" style={{marginTop: '50px'}}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="fw-bold" style={{ color: '#002366' }}>Frequently Asked Questions</h2>
            <p className="text-muted">Pertanyaan yang sering diajukan tentang My I-Pond dan teknologi yang kami gunakan.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <span style={{ fontWeight: 'bold', color: '#002366' }}>{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: '#555' }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQComponent;
