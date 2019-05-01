import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/easy.json';
import classes from './easy.css';

const questions = data.easy[Math.floor(Math.random() * data.easy.length)]

class Easy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      score: 0,
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

export default Easy;
