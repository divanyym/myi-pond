import React from 'react'
import Informasiii from "../assets/img/Informasi.jpg";
import { Col } from 'react-bootstrap';


const Informasi = () => {
  return (
    <div>
<Col className="d-flex justify-content-center">
  <img 
    src={Informasiii} 
    alt="Informasi Icon" 
    style={{ maxWidth: "100%", height: "auto", width: "900px", borderRadius: "10px" }} 
  />
</Col>


    </div>
  )
}

export default Informasi