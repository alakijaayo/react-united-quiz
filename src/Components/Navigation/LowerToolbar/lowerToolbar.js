import React, { Component } from 'react';
import classes from './lowerToolbar.css';

class LowerToolbar extends Component {
  render () {
    return (
      <div className={classes.LowerToolbar}>
        <h4>Question: {this.props.number}/25</h4>
        <h4>Score: {this.props.score}/25</h4>
      </div>
    )
  }
}

export default LowerToolbar
