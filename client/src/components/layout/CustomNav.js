import React from 'react';

// imported components
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { setCategory } from '../../actions/charts';

const CustomNav = ({ setCategory }) => (
  <Navbar color='dark'>
    <NavbarBrand>SWEDESTATS</NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink onClick={() => setCategory('population')}>Population</NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={() => setCategory('births')}>Births</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default connect(
  null,
  { setCategory }
)(CustomNav);
