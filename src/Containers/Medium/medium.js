import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/medium.json';
import classes from './medium.css';

const questions = data.medium
const number = questions[Math.floor(Math.random()*questions.length)]

class Medium extends Component {
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
        <h1>{number.question}</h1>
        <button className={classes.Button} type="button">{number.option_a}</button>
        <button className={classes.Button} type="button">{number.option_b}</button>
        <button className={classes.Button} type="button">{number.option_c}</button>
        <button className={classes.Button} type="button">{number.option_d}</button>
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>
    )
  }
}

export default Medium;
