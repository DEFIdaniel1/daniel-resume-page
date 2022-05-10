import React from 'react'
import {Row, Col} from 'react-bootstrap';

import './RowItem.scss'

const RowItem = (props) => {
const iconClass = `${props.icon} fa-3x`

    return (
    <Row className="content-row">
      <Col lg={1}>
        <i class={iconClass}></i>
      </Col>
      <Col lg={6}>
        <h5>{props.text}</h5>
      </Col>
    </Row>
  );
}

export default RowItem