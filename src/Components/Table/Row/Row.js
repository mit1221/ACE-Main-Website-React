import React from 'react';
import classes from './Row.css';
import TagType from '../../../TagType';

const row = props => {
  let data = [];

  props.data.forEach(item => {
    data.push(<td key={item}><TagType link={props.link} newPage={props.newPage} text={item}/></td>);
  });

  if (props.width) {
    data[0] = <td key={props.data[0]} width={props.width}>
      <TagType link={props.link} newPage={props.newPage} text={props.data[0]}/>
    </td>;
  }

  return <tr className={classes.row}>{data}</tr>;
};

export default row;
