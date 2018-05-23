import React from 'react';
import classes from './NavItem.css';
import TagType from '../../../../TagType';

const navItem = props => {
  return <li className={classes.navItem}>
    <TagType
      link={props.link}
      newPage={props.newPage}
      text={props.children}
      activeClass={classes.active}
      navlink/>
  </li>;
};

export default navItem;
