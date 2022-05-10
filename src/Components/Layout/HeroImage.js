import React from "react";
import "./HeroImage.styles.scss";
import { Row, Col } from "react-bootstrap";

const IntroImage = () => {
  return (
    <>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Row className="backgroundImgDiv">
          <Col md={3} sm={2} xs={1}>
            <div>
              <h2 className="bracket-top">
                <i class="fa-solid fa-chevron-left fa-2x"></i>
              </h2>
            </div>
          </Col>
          <Col md={6} xs={10}>
            <h1 className="fade-in1">I'm Daniel...</h1>
            {/* <div>
              <Image src={laptop} alt="application icon" width="60%" />
            </div> */}
            <h2 className="fade-in2">...a blockchain and web app developer!</h2>
          </Col>
          <div>
            <h2 className="bracket-bottom">
              <i class="fa-solid fa-chevron-right fa-2x"></i>
            </h2>
          </div>
        </Row>
      </div>
    </>
  );
};

export default IntroImage;
