import React, { useState } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

import './Jumbotron.sass';
import BannerJumbotron from '../../Assets/Images/BannerJumbotron.png';

const JumbotronComponent = props => {
  const { author, role, description } = props;
  const [click, setClick] = useState(false);

  const handleClick = () => {
    alert('Hello World');
  }

  return (
    <div>
      <Jumbotron className="jumbotron-container mt-5">
        <Container>
          <div className="jumbotron-content">
            <div className="jumbotron-info">
              <h1 className="display-3"><h1 className="hello-text">Hello</h1>, im {author}</h1>
              <p className="lead">{role}</p>
              <p className="jumbotron-desc">{description}</p>
              <p className="lead">
                <Button onClick={handleClick} className="btn-one">Hire Me</Button>
                <Button onClick={handleClick} className="btn-two">Get CV</Button>
              </p>
            </div>
            <div className="jumbotron-banner">
              <img src={BannerJumbotron} className="banner-jumbotron" />
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export { JumbotronComponent };
