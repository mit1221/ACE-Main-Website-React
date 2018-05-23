import React from 'react';
import classes from './HLink.css';

const hLink = props => (
  <a href={props.link} target={props.newPage ? '_blank' : null} className={classes.hlink}>
    <mark style={{
      color: props.color,
      fontSize: props.fontSize,
      backgroundColor: props.bgColor,
      textTransform: props.uppercase ? 'uppercase' : null
    }}>
      {props.children} <span>&#10140;</span>
    </mark>
  </a>
);

export default hLink;
