import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/medium.json';

class Medium extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      score: 0,
      questions: data.medium[Math.floor(Math.random() * data.medium.length)]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    if(choice === this.state.questions.correct) {
      this.setState({number: this.state.number + 1, score: this.state.score + 1})
    } else this.setState({number: this.state.number + 1})
  }

  render() {
    return (
      <div>
        <Questionnaire questions={this.state.questions} handleClick={this.handleClick} />
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>
    )
  }
}

export default Medium;
