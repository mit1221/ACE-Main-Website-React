import React from 'react';
import classes from './Header.css';
import Logo from '../Logo/Logo';
import HeaderNavItems from './HeaderNavItems/HeaderNavItems';

const header = props => (<header className={classes.header}>
  <Logo/>
  <nav>
    <HeaderNavItems/>
  </nav>
</header>);

export default header;
