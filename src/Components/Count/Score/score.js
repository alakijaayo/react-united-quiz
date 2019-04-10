import React from 'react';
import Aux from '../../../HOC/aux';

const score = (props) => (
  <Aux>
    <h4>Score: {props.score}/25</h4>
  </Aux>
)

export default score;
