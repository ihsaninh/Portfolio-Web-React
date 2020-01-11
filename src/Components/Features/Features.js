import React from 'react';
import { Row, Col } from 'reactstrap';

import './Features.css'
import waveBg from '../../Assets/Images/wave.svg';

const Features = props => {

  const bgStyle = {
    backgroundImage: `url(${waveBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  
  return (
    <div className="features-container" style={bgStyle}>  
      <h6 className="features-title">WHAT DO WE PROVIDE</h6>
      <Row>
        <Col xs="6">.col-6</Col>
      </Row>
    </div>
  )
}

export { Features };
