import React from 'react';
import classes from './toolbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/logo';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Link to="/"><h4>HOME</h4></Link>
    <Logo />
    <div><h4>PLAYER</h4></div>
  </header>
)

export default toolbar;
