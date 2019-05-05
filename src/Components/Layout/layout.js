import React, { Component } from 'react'
import Aux from '../../HOC/aux';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar';
import LowerToolbar from '../Navigation/LowerToolbar/lowerToolbar';

class Layout extends Component {
  render() {
    return(
      <Aux>
        <Toolbar restart={this.props.restart}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <LowerToolbar
          number={this.props.number}
          score={this.props.score}
        />
      </Aux>
    )
  }
}



export default Layout;
