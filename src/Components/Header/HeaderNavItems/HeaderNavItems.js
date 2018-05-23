import React from 'react';
import classes from './HeaderNavItems.css';
import NavItem from './NavItem/NavItem';
import NavDropdown from './NavDropdown/NavDropdown';
import NavDropdownItem from './NavDropdown/NavDropdownItem/NavDropdownItem';

const headerNavItems = props => (<ul className={classes.headerNavItems}>
  {/* <NavDropdown text='Services'>
    <NavDropdownItem link='/weddings'>Service 1</NavDropdownItem>
    <NavDropdownItem link='/support'>Service 2</NavDropdownItem>
    <NavDropdownItem link='/room-res'>Service 3</NavDropdownItem>
  </NavDropdown> */}
  <NavItem link="/support">Tech Support</NavItem>
  <NavItem link="/room-res">Room Reservation</NavItem>
  <NavItem link="/weddings">Weddings</NavItem>
  <NavItem link="/filming">Filming</NavItem>
  <NavItem link="../class_spec">Room Description</NavItem>
  <NavItem link="/accessibility">Accessibility</NavItem>
</ul>);

export default headerNavItems;
