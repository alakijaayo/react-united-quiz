import React, { Component } from 'react';
import Questionnaire from '../../Components/Questionnaire/questionnaire';
import data from '../../Data/easy.json';

class Easy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: data.easy[Math.floor(Math.random() * data.easy.length)]
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

export default Easy;
