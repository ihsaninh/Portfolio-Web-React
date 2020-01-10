import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './Navbar.css';

const NavbarApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Navbar light expand="md" className="navbar">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navlink" navbar>
              <NavItem className="navitem">
                <NavLink className="active" href="/components/">HOME</NavLink>
              </NavItem>
              <NavItem className="navitem">
                <NavLink className="navlinknormal" href="/components/">SERVICES</NavLink> 
              </NavItem>
              <NavItem className="navitem">
                <NavLink className="navlinknormal" href="/components/">PORTFOLIO</NavLink> 
              </NavItem>
              <NavItem className="navitem">
                <NavLink className="navlinknormal" href="/components/">CONTACT US</NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export { NavbarApp };
