import React from 'react';
import classes from './Card.css';

const card = props => (
  <a href={props.link} className={classes.card} target={props.newPage ? '_blank' : null}>
    <div>
      <img src={props.icon} alt={props.altText} />
      <p class={classes.cardText}>{props.text}</p>
    </div>
  </a>
);

export default card;
