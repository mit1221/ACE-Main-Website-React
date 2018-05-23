import React from 'react';
import classes from './NavDropdownItem.css';
import TagType from '../../../../../TagType';

const navDropdownItem = props => <TagType
    link={props.link}
    newPage={props.newPage}
    text={props.children}
    class={classes.dropdownItem}
    activeClass={classes.active}
    navlink/>

export default navDropdownItem;
