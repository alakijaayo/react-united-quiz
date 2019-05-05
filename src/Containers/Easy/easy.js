import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/easy.json';

class Easy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: data.easy[Math.floor(Math.random() * data.easy.length)]
    }
  }

  isCorrect = (choice) => choice === this.state.questions.correct ? "correct" : "wrong"

  render() {
    return (
      <div>
        <Questionnaire
          questions={this.state.questions}
          handleClick={this.props.handleClick}
          correct={this.isCorrect} />
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>

    )
  }
}

export default Easy;
