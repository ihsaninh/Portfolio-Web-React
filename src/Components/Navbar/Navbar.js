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
    href: '/components/',
    title: 'HOME',
    classItem: 'navitem',
    classLink: 'active',
  }, {
    href: '/components/',
    title: 'SERVICES',
    classItem: 'navitem',
    classLink: 'navlinknormal',
  }, {
    href: '/components/',
    title: 'PORTFOLIO',
    classItem: 'navitem',
    classLink: 'navlinknormal',
  }, {
    href: '/components/',
    title: 'CONTACT US',
    classItem: 'navitem',
    classLink: 'navlinknormal',
  }];



  return (
    <div className="App">
      <Navbar light expand="md" className="navbar">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navlink" navbar>
            {navItems.map((item, index ) => (
              <NavItem className={item.classItem} key={index}>
                <NavLink className={item.classLink} href={item.href}>{item.title}</NavLink>
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
