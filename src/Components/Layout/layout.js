import React from 'react'
import Aux from '../../HOC/aux'
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;