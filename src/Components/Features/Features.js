import React from 'react';

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
    </div>
  )
}

export { Features };
