import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/easy.json';

class Easy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      score: 0,
      questions: data.easy[Math.floor(Math.random() * data.easy.length)]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    if(choice === this.state.questions.correct) {
      this.setState({number: this.state.number + 1, score: this.state.score + 1})
    } else this.setState({number: this.state.number + 1})
  }

  isCorrect = (choice) => choice === this.state.questions.correct ? "correct" : "incorrect"

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

export default Easy;
