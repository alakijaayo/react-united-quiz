import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './wrong.css'

class Wrong extends Component {
  render() {
    const questionNumber = this.props.number
    let button;

    if(questionNumber === 25) {
      button = <Link to="/final"><button data-cy="submit" className={classes.Button}>Final Score</button></Link>
    } else {
      button = <Link to={`/${this.props.level}`}><button data-cy="submit" className={classes.Button} onClick={this.props.nextQuestion}>Next Question</button></Link>
    }

    return (
      <div>
        <h1 className={classes.Text}>Unlucky</h1>
        {button}
      </div>
    )
  }
}

export default Wrong
