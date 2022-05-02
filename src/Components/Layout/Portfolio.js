import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';

import placeholderImg from "../../images/brackets-purple.png";
import myOctago from "../../images/myOctago.png";

const Portfolio = () => {
  return (
    <Container fluid className="text-center">
      <h1>Portfolio</h1>
      <p>This website, of course</p>
      <p>Github Link</p>
      <br></br>
      <Row>
        <Col md={4}>
          <h2>Blockchain Project</h2>
          <p>Nothing is better than developing intuitive apps.</p>
          <p>Built with React</p>
          <Image src={placeholderImg} className="img-about img-fluid" />
          <p>Github Link</p>
        </Col>
        <Col md={4}>
          <h2>eCommerce Project</h2>
          <p>An eCommerce website built from the ground up.</p>
          <p>Built with React</p>
          <Image src={placeholderImg} className="img-about img-fluid" />
          <p>Github Link</p>
        </Col>
        <Col md={4}>
          <h2>myOctago.com</h2>
          <p>
            A fully functioning eCommerce website with payments, accounts,
            backend, and more.
          </p>
          <p>Built with WooCommerce</p>
          <a href="https://www.myoctago.com">
            <Image src={myOctago} className="img-portfolio  img-fluid" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio