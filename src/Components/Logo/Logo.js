import React from 'react';
import classes from './Logo.css';
import ACELogo from '../../Images/Logo.svg';
import UofTLogo from '../../Images/UofT_Logo.svg';
import { Link } from 'react-router-dom';

const logo = props => <Link className={classes.link} to="/">
  <img className={classes.UofTLogo} src={UofTLogo} alt="UofT Logo"/>
  <div className={classes.pipe}></div>
  <img className={classes.ACELogo} src={ACELogo} alt="ACE Logo"/>
</Link>;

export default logo;
