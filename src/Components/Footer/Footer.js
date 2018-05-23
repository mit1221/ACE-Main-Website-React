import React from 'react';
import classes from './Footer.css';
import FooterNavItems from './FooterNavItems/FooterNavItems';

const footer = props => (<footer className={classes.footer}>
  <nav>
    <FooterNavItems/>
  </nav>
</footer>);

export default footer;
