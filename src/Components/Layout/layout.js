import React, { Component } from 'react'
import Aux from '../../HOC/aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar';

class Layout extends Component {
  state = {
    number: 0,
    score: 0
  }

  render() {
    return(
      <Aux>
        <Toolbar
          number={this.state.number}
          score={this.state.score} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}



export default Layout;
