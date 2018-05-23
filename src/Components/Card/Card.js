import React from 'react';
import classes from './Card.css';

const card = props => {
  let imageAndText = [];
  // the card has an icon
  if (props.icon) {
    // only 1 icon was passed in as a prop
    if (props.icon.constructor !== Array) {
      imageAndText.push(<img key={1} className={classes.cardIcon} src={props.icon} alt={props.altText} />);
      imageAndText.push(<p key={2} className={classes.cardText}>{props.text}</p>);
    } else {
      for (let i = 0; i < props.icon.length; i++) {
        imageAndText.push(<img key={i} className={classes.cardIcon} src={props.icon[i]} alt={props.altText[i]} />);
        imageAndText.push(<p key={props.icon.length + i} className={classes.cardText}>{props.text[i]}</p>);
      }
    }
  } else {
    imageAndText = [<p key={1} style={{marginTop: 0}} className={classes.cardText}>{props.text}</p>];
  }

  return <a className={classes.cardLink} href={props.link}  target={props.newPage ? '_blank' : null}>
      <div className={classes.card}>
        {imageAndText}
      </div>
    </a>;
};

export default card;
