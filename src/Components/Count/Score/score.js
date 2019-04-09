import React, { Component} from 'react';
import Aux from '../../../HOC/aux';

class Score extends Component {
  state = {
    score: 0
  }

  render() {
    return (
      <Aux>
        <h4>Score: {this.state.score}/25</h4>
      </Aux>
    )
  }
}

export default Score;
