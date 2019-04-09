import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Introduction from '../Introduction/introduction';
import { Route } from 'react-router-dom';

class Quiz extends Component {
  render () {
    return (
        <Aux>
          <Route path="/" exact component={Introduction} />
        </Aux>
    )
  }
}

export default Quiz;
