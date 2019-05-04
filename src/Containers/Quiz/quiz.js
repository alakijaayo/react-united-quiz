import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Introduction from '../Introduction/introduction';
import Easy from '../Easy/easy';
import Medium from '../Medium/medium';
import Hard from '../Hard/hard';
import Correct from '../Correct/correct';
import Wrong from '../Wrong/wrong';
import { Route } from 'react-router-dom';

class Quiz extends Component {
  render () {
    return (
        <Aux>
          <Route path="/" exact component={Introduction} />
          <Route path="/easy" exact render={(props) => <Easy updateNumber={this.props.updateNumber} updateScoreAndNumber={this.props.updateScoreAndNumber} />} />
          <Route path="/medium" exact render={(props) => <Medium updateNumber={this.props.updateNumber} updateScoreAndNumber={this.props.updateScoreAndNumber} />} />
          <Route path="/hard" exact render={(props) => <Hard updateNumber={this.props.updateNumber} updateScoreAndNumber={this.props.updateScoreAndNumber} />} />
          <Route path="/correct" exact component={Correct} />
          <Route path="/wrong" exact component={Wrong} />
        </Aux>
    )
  }
}

export default Quiz;
