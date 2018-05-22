import React from 'react';
import classes from './HeaderNavItems.css';
import NavItem from './NavItem/NavItem';
import NavDropdown from './NavDropdown/NavDropdown';

const headerNavItems = props => (<ul>
  <NavDropdown text="Services">
    <a href="tech_support.html">Tech Support</a>
    <a href="../comments">Problem Box</a>
    <a href="room_res.html">Room Resrv</a>
    <a href="weddinghome.html">Weddings</a>
    <a href="film.html">Filming</a>
  </NavDropdown>
  <NavItem link="../class_spec">Room Descrp</NavItem>
  <NavItem link="accessibility.html">Accessibility</NavItem>
</ul>);

export default headerNavItems;

// <li className={classes.dropdown}>Services &nbsp;<img src={arrow} alt="down arrow icon"/>
//   <div className={classes.dropdown_content}>
//     <a href="tech_support.html">Tech Support</a>
//     <a href="../comments">Problem Box</a>
//     <a href="room_res.html">Room Resrv</a>
//     <a href="weddinghome.html">Weddings</a>
//     <a href="film.html">Filming</a>
//   </div>
// </li>