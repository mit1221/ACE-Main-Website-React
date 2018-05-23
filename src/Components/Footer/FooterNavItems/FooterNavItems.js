import React from 'react';
import classes from './FooterNavItems.css';
import NavItem from './NavItem/NavItem';

const footerNavItems = props => (<ul className={classes.footerNavItems}>
  <NavItem link='index2.html'>Abous Us</NavItem>
  <NavItem link='http://map.utoronto.ca'>Campus Map</NavItem>
  <NavItem link='websites.html'>Related Websites</NavItem>
  <NavItem link='http://ace.utoronto.ca/refundpolicy.html'>Policies</NavItem>
  <NavItem link='contact.html'>Contact Us/Find Us</NavItem>
</ul>);

export default footerNavItems;
