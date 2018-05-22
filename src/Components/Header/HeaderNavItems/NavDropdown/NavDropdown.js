import React from 'react';
import classes from './NavDropdown.css';
import arrow from '../../../../Images/arrow.svg';

const navDropdown = props => (<li className={classes.dropdown}>{props.text}
  &nbsp;<img className={classes.downArrow} src={arrow} alt="down arrow icon"/>
  <div className={classes.dropdownContent}>{props.children}</div>
</li>);

export default navDropdown;
