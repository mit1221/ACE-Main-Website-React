import React from 'react';
import classes from './Logo.css';
import ACELogo from '../../Images/Logo.svg';
import UofTLogo from '../../Images/UofT_Logo.svg';

const logo = props => <a className={classes.link} href="/">
  <img className={classes.UofTLogo} src={UofTLogo} alt="UofT Logo"/>
  <div className={classes.pipe}></div>
  <img className={classes.ACELogo} src={ACELogo} alt="ACE Logo"/>
</a>;

export default logo;
