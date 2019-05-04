import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/medium.json';

class Medium extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: data.medium[Math.floor(Math.random() * data.medium.length)]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    if(choice === this.state.questions.correct) {
      this.props.updateScoreAndNumber()
    } else this.props.updateNumber()
  }

  isCorrect = (choice) => choice === this.state.questions.correct ? "correct" : "wrong"

  render() {
    return (
      <div>
        <Questionnaire
          questions={this.state.questions}
          handleClick={this.handleClick}
          correct={this.isCorrect} />
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>
    )
  }
}

export default Medium;
