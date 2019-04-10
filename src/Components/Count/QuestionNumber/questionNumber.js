import React from 'react';
import Aux from '../../../HOC/aux';

const questionNumber = (props) => (
      <Aux>
        <h4>Question: {props.question}/25</h4>
      </Aux>
    )

export default questionNumber;
