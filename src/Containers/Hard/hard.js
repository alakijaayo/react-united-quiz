import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/hard.json'

const questions = data.hard
const number = questions[Math.floor(Math.random()*questions.length)]

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
        <h1>{number.question}</h1>
        <button type="button">{number.option_a}</button>
        <button type="button">{number.option_b}</button>
        <button type="button">{number.option_c}</button>
        <button type="button">{number.option_d}</button>
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>

    )
  }
}

export default Hard;
