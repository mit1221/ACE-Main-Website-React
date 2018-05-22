import React from 'react';
import classes from './Card.css';

const card = props => {
  let image = null;
  if (props.icon) {
    image = <img className={classes.cardIcon} src={props.icon} alt={props.altText} />;
  }

  return <a className={classes.cardLink} href={props.link}  target={props.newPage ? '_blank' : null}>
    <div className={classes.card}>
      {image}
      <p style={{marginTop: props.icon ? 15 : 0}} class={classes.cardText}>{props.text}</p>
    </div>
  </a>;
};

export default card;
