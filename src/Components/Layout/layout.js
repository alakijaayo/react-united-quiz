import React, { Component } from 'react'
import Aux from '../../HOC/aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar';

class Layout extends Component {
  render() {
    return(
      <Aux>
        <Toolbar />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}



export default Layout;
