// This component is for deciding whether to insert <a> or <Link> for any links
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const tagType = props => {
  let text = props.text ? props.text : props.children;
  let linkTag = <a className={props.class} href={props.link} target={props.newPage ? '_blank' : null}>{text}</a>;

  if (props.link.charAt(0) === '/') {
    if (props.navlink) {
      linkTag = <NavLink className={props.class} to={props.link} activeClassName={props.activeClass}>{text}</NavLink>
    } else {
      linkTag = <Link className={props.class} to={props.link}>{text}</Link>
    }
  }

  return linkTag;
};

export default tagType;
