
import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/easy.json'

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
        {data.easy.map((question) => {
          return <h1>{question.question_number}</h1>
        })}
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>

    )
  }
}

export default Easy;
