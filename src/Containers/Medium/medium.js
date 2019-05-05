import React, { Component } from 'react';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/medium.json';

class Medium extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: data.medium[Math.floor(Math.random() * data.medium.length)]
    }
  }

  render() {
    return (
      <div>
        <Questionnaire
          questions={this.state.questions}
          handleClick={this.props.handleClick}
          webpage={this.props.webpage}
        />
      </div>
    )
  }
}

export default Medium;
