import React from 'react';
import classes from './HeaderNavItems.css';
import NavItem from './NavItem/NavItem';
import NavDropdown from './NavDropdown/NavDropdown';
import NavDropdownItem from './NavDropdown/NavDropdownItem/NavDropdownItem';

const headerNavItems = props => (<ul className={classes.headerNavItems}>
  <NavDropdown text="Services">
    <NavDropdownItem link="tech_support.html">Tech Support</NavDropdownItem>
    <NavDropdownItem link="../comments">Problem Box</NavDropdownItem>
    <NavDropdownItem link="room_res.html">Room Resrv</NavDropdownItem>
    <NavDropdownItem link="weddinghome.html">Weddings</NavDropdownItem>
    <NavDropdownItem link="film.html">Filming</NavDropdownItem>
  </NavDropdown>
  <NavItem link="../class_spec">Room Description</NavItem>
  <NavItem link="accessibility.html">Accessibility</NavItem>
</ul>);

export default headerNavItems;
