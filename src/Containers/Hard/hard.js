import React, { Component } from 'react';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/hard.json';

class Hard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: "hard",
      questions: data.hard[Math.floor(Math.random() * data.hard.length)]
    }
  }

  render() {
    return (
      <div>
        <Questionnaire
          questions={this.state.questions}
          handleClick={this.props.handleClick}
          webpage={this.props.webpage}
          level={this.state.level}
          changeLevel={this.props.changeLevel}
        />
      </div>

    )
  }
}

export default Hard;
