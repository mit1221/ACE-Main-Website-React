import React from 'react';
import classes from './NavItem.css';

const navItem = props => (<li className={classes.navItem}>
  <a href={props.link} target={props.newPage ? '_blank' : null}>{props.children}</a>
</li>);

export default navItem;
