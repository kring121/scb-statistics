import React from 'react';

import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';
const CustomNav = () => (
  <Navbar color='dark'>
    <NavbarBrand>SWEDESTATS</NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink>Population</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Births</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default CustomNav;
