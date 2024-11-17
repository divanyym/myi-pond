import { Container, Row, Col, Button } from "react-bootstrap";
import IkanImage from "../assets/img/ikan.png";
import BenefitsComponent from "../pages/Homepage1";
import FeaturesComponent from "../pages/AboutPages";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" style={{ marginTop: "-50px" }}>
            <h1 className="header-shadow mb-4">
              We Create <br />
              <span style={{ color: "#4090CE" }}>solutions</span> with IoT for <br />
              your fish pond business
            </h1>
            <p className="mb-4"> Our team keeps a keen eye on emerging ponds control and 
            technologies such as IoT system and machine learning 
            to ensure healthy and good growth of catfish 
            </p>
            <Button className="btn btn-danger btn-lg rounded-3 me-2"> Get to know more</Button>
            <button className="btn btn-outline-danger btn-lg rounded-3 me-2"> Explore </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={IkanImage} alt="ikan-img" />
            </Col>
          </Row>
        </Container>
        </header>
        <div className="kelas w-100 min-vh-100 ">
          <Container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold">What's My I-Pond</h1>
              <p className="text-center">Benefits</p>
              </Col>
            </Row>
            <Row>
            <BenefitsComponent id="benefits-section" />
              <Col>
              </Col>
            </Row>
          </Container>
          <FeaturesComponent/>
        </div>
    </div>
  );
};

export default HomePage