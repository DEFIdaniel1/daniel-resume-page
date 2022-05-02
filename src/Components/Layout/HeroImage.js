import React from 'react'
// import appIcon from "../../images/application-icon.png";
import laptop from "../../images/laptop-code.png";
import blueBrackets from "../../images/brackets-blue.png";
import "./HeroImage.styles.scss";
import {Row, Col, Image} from 'react-bootstrap';

const IntroImage = () => {
  return (
    <>
      <Row className="backgroundImgDiv">
        <Col md={3} sm={2} xs={1}>
          <Image src={blueBrackets} alt="blockchain icon" width="30%" />
        </Col>
        <Col md={6} xs={10}>
          <h1>I'm Daniel...</h1>
          <div>
            <Image src={laptop} alt="application icon" width="60%" />
          </div>
          <h2>...a blockchain and web app developer!</h2>
        </Col>
        <Col md={3} sm={2} xs={1}>
          <Image
            src={blueBrackets}
            alt="blockchain icon"
          />
        </Col>
      </Row>
    </>
  );
}

export default IntroImage