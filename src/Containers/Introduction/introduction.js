import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Welcome from '../../Components/Homepage/Welcome/welcome';
import Description from '../../Components/Homepage/Description/description';
import LevelChoices from '../../Components/Homepage/LevelChoices/levelChoices';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';

class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      score: 0
    }
  }

  render () {
    return (
        <Aux>
          <Welcome />
          <Description />
          <LevelChoices />
          <LowerToolbar
            number={this.state.number}
            score={this.state.score} />
        </Aux>
    )
  }
}

export default Introduction;
