import React from 'react';
import classes from './HeaderNavItems.css';
import NavItem from './NavItem/NavItem';
import NavDropdown from './NavDropdown/NavDropdown';
import NavDropdownItem from './NavDropdown/NavDropdownItem/NavDropdownItem';

const headerNavItems = props => (<ul className={classes.headerNavItems}>
  <NavItem link="tech_support.html">Tech Support</NavItem>
  <NavItem link="room_res.html">Room Resrv</NavItem>
  <NavItem link="weddinghome.html">Weddings</NavItem>
  <NavItem link="film.html">Filming</NavItem>
  <NavItem link="../class_spec">Room Description</NavItem>
  <NavItem link="accessibility.html">Accessibility</NavItem>
</ul>);

export default headerNavItems;
