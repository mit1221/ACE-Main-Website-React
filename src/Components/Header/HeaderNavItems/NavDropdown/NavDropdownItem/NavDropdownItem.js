import React from 'react';
import classes from './NavDropdownItem.css';

const navDropdownItem = props => {
  const classesToAdd = [classes.dropdownItem, props.active ? classes.active : null];
  return <a href={props.link} className={classesToAdd.join(' ')}>{props.children}</a>;
};

export default navDropdownItem;
