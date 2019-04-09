import React, { Component} from 'react';
import Aux from '../../../HOC/aux';

class QuestionNumber extends Component {
  state = {
    question: 0
  }

  render() {
    return (
      <Aux>
        <h4>Question: {this.state.question}/25</h4>
      </Aux>
    )
  }
}

export default QuestionNumber;
