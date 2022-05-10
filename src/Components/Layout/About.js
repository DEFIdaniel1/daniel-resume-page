import React from "react";
import { Image, Row, Col } from "react-bootstrap";

import "./About.scss";
import Icon from "../UI/Icon";
import IconSmall from "../UI/IconSmall";
import TransitionPage from "../UI/TransitionPage";

import browser from "../../images/browser-code.png";
import blockchain from "../../images/blockchain.png";
import cssHtmlImg from "../../images/icons/cssHtml.png";
import reactImg from "../../images/icons/react.png";
import solidityImg from "../../images/icons/solidity.png";
import javscriptImg from "../../images/icons/javascript.png";
import bootstrapImg from "../../images/icons/bootstrap.png";
import mongoDbImg from "../../images/icons/mongoDB.png";
import reduxImg from "../../images/icons/redux.png";
import nodeImg from "../../images/icons/nodejs.png";
import expressImg from "../../images/icons/expressjs.png";
import web3Img from "../../images/icons/web3.png";

import gitImg from "../../images/icons/github-logo.png";
import visualStudioImg from "../../images/icons/visualStudio.png";
import firebaseImg from "../../images/icons/firebase.png";
import wooCommerceImg from "../../images/icons/wooCommerce.png";
import adobeCCImg from "../../images/icons/adobeCC.png";
import finalCutImg from "../../images/icons/fcpLogo.png";
import RowItem from "../UI/RowItem";

const About = () => {
  const javaScriptItem = { name: "JavaScript", img: javscriptImg };
  const cssHtmlItem = { name: "HTML5 & CSS3", img: cssHtmlImg };
  const reactItem = { name: "React", img: reactImg };
  const reduxItem = { name: "Redux", img: reduxImg };
  const bootstrapItem = { name: "Bootstrap", img: bootstrapImg };
  const nodeItem = { name: "NodeJS", img: nodeImg };
  const mongoDbItem = { name: "MongoDB", img: mongoDbImg };
  const expressItem = { name: "ExpressJS", img: expressImg };
  const web3Item = { name: "Web3JS", img: web3Img };
  const solidityItem = { name: "Solidity", img: solidityImg };

  const gitHub = { name: "GitHub", img: gitImg };
  const visualStudio = { name: "Visual Studio", img: visualStudioImg };
  const firebase = { name: "Firebase", img: firebaseImg };
  const wooCommerce = { name: "wooCommerce", img: wooCommerceImg };
  const adobeCC = { name: "Adobe CC", img: adobeCCImg };
  const finalCut = { name: "Final Cut Pro", img: finalCutImg };

  return (
    <>
      <TransitionPage title="A little bit about me..." />
      <section className="white-section">
        <section className="section">
          <Row>
            <Col md={5}>
              <Image src={browser} className="img-about img-fluid" />
            </Col>
            <Col md={7}>
              <h3 className="text-center">
                I love building web applications that are
              </h3>
              <RowItem icon="fa-solid fa-eye" text="Great user experiences" />
              <RowItem
                icon="fa-solid fa-champagne-glasses"
                text="Reactive and responsive"
              />
              <RowItem
                icon="fa-solid fa-person-cane"
                text="Easy enough for grandpa"
              />
            </Col>
          </Row>
          <br />
          <hr />
          <Row>
            <Col md={5}>
              <Image src={blockchain} className="img-about img-fluid" />
            </Col>
            <Col md={7}>
              <h3 className="text-center">Mention blockchains... </h3>
              <h6 className="text-center">...and I may never shut up</h6>
              <RowItem
                icon="fa-solid fa-hammer"
                text="New building possibilities"
              />
              <RowItem icon="fa-solid fa-handshake" text="dApps and Web3" />
              <RowItem
                icon="fa-solid fa-laptop"
                text="A decentralized future"
              />
            </Col>
          </Row>
        </section>
      </section>
      <section className="gray-section section">
        <section className="section">
          <h2 className="text-center">Do we speak the same language?</h2>
          <p className="text-center">Some languages and frameworks I use:</p>
        </section>
        <section className="section">
          <Row className="text-center mx-auto lg-icon-div">
            <Icon icon={javaScriptItem} />
            <Icon icon={cssHtmlItem} />
            <Icon icon={reactItem} />
            <Icon icon={reduxItem} />
          </Row>
        </section>
        <Row className="text-center mx-auto sm-icon-div align-items-end">
          <IconSmall icon={bootstrapItem} />
          <IconSmall icon={mongoDbItem} />
          <IconSmall icon={nodeItem} />
          <IconSmall icon={expressItem} />
          <IconSmall icon={web3Item} />
          <IconSmall icon={solidityItem} />
        </Row>
      </section>
      <section className="blue-section">
        <h2 className="text-center">Apps I love</h2>
        <Row className="text-center mx-auto sm-icon-div">
          <IconSmall icon={gitHub} />
          <IconSmall icon={visualStudio} />
          <IconSmall icon={firebase} />
          <IconSmall icon={wooCommerce} />
          <IconSmall icon={adobeCC} />
          <IconSmall icon={finalCut} />
        </Row>
      </section>
    </>
  );
};

export default About;
