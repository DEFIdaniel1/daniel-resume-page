import React from 'react'
import {Row, Col, Image, Button} from 'react-bootstrap';

import placeholderImg from "../../images/brackets-purple.png";
import myOctago from "../../images/myOctago.png";

const Portfolio = () => {
  return (
    <section className="white-section text-center">
      <h1>Portfolio</h1>
      <p>This website, of course</p>
      <Button variant="outline-primary" className="button">
        <i className="bi bi-github"></i> Github
      </Button>
      <br></br>
      <br></br>
      <Row>
        <h2>Websites</h2>
        <Col md={4}>
          <h3>Blockchain Project</h3>
          <p>Nothing is better than developing intuitive apps.</p>
          <p>Built with React</p>
          <Image src={placeholderImg} className="img-about img-fluid" />
          <Button variant="outline-primary" className="button">
            <i className="bi bi-github"></i> Github
          </Button>
        </Col>
        <Col md={4}>
          <h3>eCommerce Project</h3>
          <p>An eCommerce website built from the ground up.</p>
          <p>Built with React</p>
          <Image src={placeholderImg} className="img-about img-fluid" />
          <Button variant="outline-primary" className="button">
            <i className="bi bi-github"></i> Github
          </Button>
        </Col>
        <Col md={4}>
          <h3>myOctago.com</h3>
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
      <br></br>
      <hr></hr>
       <br></br>
      <br></br>
      <Row>
        <h2>Web Apps</h2>
        <p>Various web apps using different techniques.</p>
        <br></br>
        <br></br>
        <br></br>
        <Col md={3}>
          <h3>Restaurant Menu</h3>
          <p>
            A super-hero themed restaurant menu. Fully interactive elements,
            including cart, form orders, and more.
          </p>
          <Button variant="outline-primary" className="button mr-1">
            <i className="bi bi-github"></i> Github
          </Button>
          <Button variant="outline-primary" className="button">
            <i class="bi bi-box-arrow-up-right"></i> App Link
          </Button>
        </Col>
        <Col md={3}>
          <h3>To Do Manager</h3>
          <p>
            A super-hero themed restaurant menu. Fully interactive elements,
            including cart, form orders, and more.
          </p>
          <Button variant="outline-primary" className="button">
            <i className="bi bi-github"></i> Github
          </Button>
          <Button variant="outline-primary" className="button">
            <i class="bi bi-box-arrow-up-right"></i> App Link
          </Button>
        </Col>
        <Col md={3}>
          <h3>Redux Cart</h3>
          <p>
            A super-hero themed restaurant menu. Fully interactive elements,
            including cart, form orders, and more.
          </p>
          <Button variant="outline-primary" className="button">
            <i className="bi bi-github"></i> Github
          </Button>
          <Button variant="outline-primary" className="button">
            <i class="bi bi-box-arrow-up-right"></i> App Link
          </Button>
        </Col>
        <Col md={3}>
          <h3>Expense Tracker</h3>
          <p>
            A super-hero themed restaurant menu. Fully interactive elements,
            including cart, form orders, and more.
          </p>
          <Button variant="outline-primary" className="button">
            <i className="bi bi-github"></i> Github
          </Button>
          <Button variant="outline-primary" className="button">
            <i class="bi bi-box-arrow-up-right"></i> App Link
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </section>
  );
}

export default Portfolio