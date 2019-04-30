import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/easy.json';
import classes from './easy.css';

const questions = data.easy
const number = questions[Math.floor(Math.random()*questions.length)]

class Easy extends Component {
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

export default Easy;
