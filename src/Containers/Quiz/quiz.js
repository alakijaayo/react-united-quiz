import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Introduction from '../Introduction/introduction';
import Easy from '../Easy/easy'
import Medium from '../Medium/medium'
import Hard from '../Hard/hard'
import { Route } from 'react-router-dom';

class Quiz extends Component {
  render () {
    return (
        <Aux>
          <Route path="/" exact component={Introduction} />
          <Route path="/easy" exact component={Easy} />
          <Route path="/medium" exact component={Medium} />
          <Route path="/hard" exact component={Hard} />

        </Aux>
    )
  }
}

export default Quiz;
