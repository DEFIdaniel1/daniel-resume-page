import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ExpSection = (props) => {
    const {icon, title, content} = props.info;

  return (
    <Row>
      <Col lg={5}>
        <h3>
          <i className={`${icon} exp-icon`}></i>
          {title}
        </h3>
      </Col>
      <Col lg={7}>{content}</Col>
    </Row>
  );
}

export default ExpSection