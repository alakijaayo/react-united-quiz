import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/hard.json';
import classes from './hard.css';

const questions = data.hard[Math.floor(Math.random() * data.hard.length)]

class Hard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      score: 0
    }
  }

  render() {
    return (
      <div>
        <h1>{questions.question}</h1>
        <button className={classes.ButtonA} type="button">{questions.option_a}</button>
        <button className={classes.ButtonB} type="button">{questions.option_b}</button>
        <button className={classes.ButtonC} type="button">{questions.option_c}</button>
        <button className={classes.ButtonD} type="button">{questions.option_d}</button>
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>

    )
  }
}

export default Hard;
