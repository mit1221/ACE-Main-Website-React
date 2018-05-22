import React from 'react';
import classes from './Card.css';

const card = props => {
  let imageAndText = [];
  if (props.icon) {
    if (props.icon.constructor !== Array) {
      imageAndText.push(<img key={1} className={classes.cardIcon} src={props.icon} alt={props.altText} />);
      imageAndText.push(<p key={2} style={{marginTop: 15}} className={classes.cardText}>{props.text}</p>);
    } else {
      
    }

    return <a className={classes.cardLink} href={props.link}  target={props.newPage ? '_blank' : null}>
      <div className={classes.card}>
        {imageAndText}
      </div>
    </a>;
  } else {
    return <a className={classes.cardLink} href={props.link}  target={props.newPage ? '_blank' : null}>
      <div className={classes.card}>
        <p style={{marginTop: 0}} className={classes.cardText}>{props.text}</p>
      </div>
    </a>;
  }
};

export default card;
