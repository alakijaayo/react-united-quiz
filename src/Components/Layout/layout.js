import React, { Component } from 'react'
import Aux from '../../HOC/aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar';
import LowerToolbar from '../Navigation/LowerToolbar/lowerToolbar';

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: props.number,
      score: props.score,
    }
  }

  render() {
    return(
      <Aux>
        <Toolbar />
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <LowerToolbar
          number={this.state.number}
          score={this.state.score}
        />
      </Aux>
    )
  }
}



export default Layout;
