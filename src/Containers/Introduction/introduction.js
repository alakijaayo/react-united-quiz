import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Welcome from '../../Components/Homepage/Welcome/welcome';
import Description from '../../Components/Homepage/Description/description';
import LevelChoices from '../../Components/Homepage/LevelChoices/levelChoices';

class Introduction extends Component {
  render () {
    return (
      <Aux>
        <Welcome />
        <Description />
        <LevelChoices />
      </Aux>
    );
  }
}

export default Introduction;
