import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
  <div>HOME</div>
    <Logo />
    <div>SCORE</div>
  </header>
)

export default toolbar;
