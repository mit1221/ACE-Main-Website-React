import React from 'react';
import classes from './NavDropdown.css';
import arrow from '../../../../Images/arrow.svg';

const navDropdown = props => (<li className={classes.dropdown}>{props.text}
  &nbsp;<img src={arrow} alt="down arrow icon"/>
  <div className={classes.dropdown_content}>{props.children}</div>
</li>);

export default navDropdown;
