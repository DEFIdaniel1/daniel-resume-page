import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

import browser from "../../images/browser-code.png";
import blockchain from "../../images/blockchain.png";
import cssHtml from "../../images/icons/cssHtml.png";
import react from "../../images/icons/react.png";
import solidity from "../../images/icons/solidity.png";
import javscript from '../../images/icons/javascript.png';
import bootstrap from '../../images/icons/bootstrap.png';
import mongoDb from "../../images/icons/mongoDB.png";
import redux from '../../images/icons/redux.png';
import node from "../../images/icons/nodejs.png";
import express from '../../images/icons/expressjs.png';
import web3 from "../../images/icons/web3.png";


const About = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">A little bit about me...</h1>
        <Row>
          <Col md={8}>
            <h2>Web apps are my passion</h2>
            <p>Nothing is better than developing intuitive apps.</p>
            <h5>Great user experience</h5>
            <p>Easy enough for grandpa.</p>
            <h5>Responsive & Reactive</h5>
            <p>Fast. Mobile-friendly. Y'know - the usual.</p>
            <h5>Did I say beautiful?</h5>
            <p>Customized UIs.. gotta love it.</p>
          </Col>
          <Col md={4}>
            <Image src={browser} className="img-about img-fluid" />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md={8}>
            <h2>Blockchain apps have huge potential</h2>
            <p>Speak to me about crypto projects and I may never shut up.</p>
            <h5>Decentralized finance? </h5>
            <p>Yes, please!</p>
            <h5>dApps and Web3 projects?</h5>
            <p>Oh yeah.</p>
          </Col>
          <Col md={4}>
            <Image src={blockchain} className="img-about img-fluid" />
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <Container fluid className="bg-gray">
        <br></br>
        <h2 className="text-center">Do we speak the same language?</h2>
        <p className="text-center">
          Always learning, but these are the languages and frameworks I use:
        </p>
        <br /> <br />
        <Row className="text-center mx-auto">
          <Col lg={3}>
            <p>Javascript</p>
            <Image src={javscript} className="img-logos" />
          </Col>
          <Col lg={3}>
            <p>HTML5 & CSS</p>
            <Image src={cssHtml} className="img-logos" />
          </Col>
          <Col lg={3}>
            <p>React</p>
            <Image src={react} className="img-logos" />
          </Col>
          <Col lg={3}>
            <p>Redux</p>
            <Image src={redux} className="img-logos" />
          </Col>
        </Row>
        <br></br>
        <Row className="text-center mx-auto">
          <Col lg={4}>
            <p>Bootstrap</p>
            <Image src={bootstrap} className="img-logos" />
          </Col>
          <Col lg={4}>
            <p>MongoDB</p>
            <Image src={mongoDb} className="img-logos" />
          </Col>
          <Col lg={4}>
            <p>NodeJS</p>
            <Image src={node} className="img-logos" />
          </Col>
        </Row>
        <br></br>
        <Row className="text-center mx-auto">
          <Col lg={4}>
            <p>ExpressJS</p>
            <Image src={express} className="img-logos " />
          </Col>
          <Col lg={4}>
            <p>Solidity</p>
            <Image src={solidity} className="img-logos" />
          </Col>
          <Col lg={4}>
            <p>Web3 JS</p>
            <Image src={web3} className="img-logos" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
