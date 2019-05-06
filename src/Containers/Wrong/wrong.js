import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './wrong.css'

class Wrong extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.Text}>Unlucky</h1>
        <Link to={`/${this.props.location.state.level}`}><button className={classes.Button}>Next Question</button></Link>
      </div>
    )
  }
}

export default Wrong
