import React from 'react';
import classes from './FooterNavItems.css';
import NavItem from './NavItem/NavItem';

const footerNavItems = props => (<ul className={classes.footerNavItems}>
  <NavItem link='/about'>About Us</NavItem>
  <NavItem link='http://map.utoronto.ca' newPage>Campus Map</NavItem>
  <NavItem link='/related-websites'>Related Websites</NavItem>
  <NavItem link='http://ace.utoronto.ca/refundpolicy.html'>Policies</NavItem>
  <NavItem link='/contact'>Contact Us/Find Us</NavItem>
</ul>);

export default footerNavItems;
