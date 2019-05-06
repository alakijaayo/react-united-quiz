import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './correct.css'

const choices = ["Correct!", "You are right!", "Well Done!", "Super!", "Awesome!", "Get In!"]
const correct = choices[Math.floor(Math.random() * choices.length)]

class Correct extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.Text}>{correct}</h1>
        <Link to={`/${this.props.level}`}><button className={classes.Button} onClick={this.props.nextQuestion}>Next Question</button></Link>
      </div>
    )
  }
}

export default Correct
