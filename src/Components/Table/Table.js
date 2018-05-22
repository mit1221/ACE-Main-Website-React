import React from 'react';
import classes from './Table.css';

const table = props => (<table className={classes.table}>
  <tbody>
    {props.children}
  </tbody>
</table>);

export default table;
