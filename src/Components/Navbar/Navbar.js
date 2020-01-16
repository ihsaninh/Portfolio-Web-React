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

  const navItems = [{
    href: '/',
    title: 'HOME',
  }, {
    href: '/services/',
    title: 'SERVICES',
  }, {
    href: '/portfolio/',
    title: 'PORTFOLIO',
  }, {
    href: '/cons/',
    title: 'CONTACT US',
  }];

  return (
    <div className="App">
      <Navbar light expand="md" className="navbar">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navlink" navbar>
            {navItems.map((item, index) => (
              <NavItem className="navitem" key={index}>
                <NavLink 
                  className={item.title === 'HOME' ? 'active' : 'navlinknormal'} 
                  href={item.href}>{item.title}
                </NavLink>
              </NavItem>
            ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export { NavbarApp };
