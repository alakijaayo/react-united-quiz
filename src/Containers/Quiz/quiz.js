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
          <Route path="/easy" exact render={(props) => <Easy handleClick={this.props.handleClick} />} />
          <Route path="/medium" exact render={(props) => <Medium handleClick={this.props.handleClick} />} />
          <Route path="/hard" exact render={(props) => <Hard handleClick={this.props.handleClick} />} />
          <Route path="/correct" exact component={Correct} />
          <Route path="/wrong" exact component={Wrong} />
        </Aux>
    )
  }
}

export default Quiz;
