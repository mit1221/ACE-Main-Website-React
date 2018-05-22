import React from 'react';
import classes from './Row.css';

const row = props => {
  let data = [];
  props.data.forEach(item => {
    data.push(<td key={item}><a href={props.link}>{item}</a></td>);
  });

  if (props.width) {
    data[0] = <td key={props.data[0]} width={props.width}><a href={props.link}>{props.data[0]}</a></td>;
  }

  return <tr className={classes.row}>{data}</tr>;
};

export default row;
