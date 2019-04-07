import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>HOME</div>
    <div>Q.NUMBER</div>
    <Logo />
    <div>SCORE</div>
    <nav>
      ...
    </nav>
  </header>
)

export default toolbar;
