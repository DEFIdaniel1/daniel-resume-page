import React from "react";
import {Col, Image} from 'react-bootstrap';

import './Icons.scss';

const LanguageItem = (props) => {
  const { name, img } = props.icon;

  return (
    <Col lg={4}>
      <Image src={img} className="img-logos" />
      <p>{name}</p>
    </Col>
  );
};

export default LanguageItem;
