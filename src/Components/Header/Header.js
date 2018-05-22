import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import HeaderNavItems from './HeaderNavItems/HeaderNavItems';

const header = props => (<header>
  <Logo/>
  <nav>
    <HeaderNavItems/>
  </nav>
</header>);

export default header;