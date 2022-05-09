import React from "react";
import { Col, Button, Accordion } from "react-bootstrap";

import "./WebApp.scss";

const WebApp = (props) => {
  const { title, description, build, img, gitLink, appLink, moreInfo } =
    props.app;

  return (
    <>
      <Col md={6} className="app-div">
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>{build}</h5>
        <Accordion flush defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="info-header">
              More Info:
            </Accordion.Header>
            <Accordion.Body className="info-body">{moreInfo}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="app-div">
          <img src={img} alt={`${title} app website`} className="app-img" />
        </div>

        <a href={gitLink}>
          <Button variant="outline-primary" className="button">
            <i className="bi bi-github"></i> Github
          </Button>
        </a>
        <a href={appLink}>
          <Button variant="outline-primary" className="button">
            <i class="bi bi-box-arrow-up-right"></i> App Link
          </Button>
        </a>
      </Col>
    </>
  );
};

export default WebApp;
