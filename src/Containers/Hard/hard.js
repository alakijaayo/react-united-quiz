import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/hard.json'

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
      {data.hard.map((question) => {
        return <h1>{question.correct}</h1>
      })}
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>

    )
  }
}

export default Hard;
