import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/medium.json'

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
      {data.medium.map((question) => {
        return <h1>{question.question}</h1>
      })}
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>
    )
  }
}

export default Medium;
