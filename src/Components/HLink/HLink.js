import React from 'react';
import classes from './HLink.css';
import TagType from '../../TagType';

const hLink = props => (
  <TagType link={props.link} newPage={props.newPage} class={classes.hlink}>
    <mark style={{
      color: props.color,
      fontSize: props.fontSize,
      backgroundColor: props.bgColor,
      textTransform: props.uppercase ? 'uppercase' : null
    }}>
      {props.children} <span>&#10140;</span>
    </mark>
  </TagType>
);

export default hLink;
