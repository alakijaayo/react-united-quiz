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
  constructor(props) {
    super()
    this.state = {
      level: ''
    }
  }

  changeLevel = (level) => this.setState({level: level})

  render () {
    return (
        <Aux>
          <Route path="/" exact render={(props) => <Introduction gameStart={this.props.gameStart} />} />
          <Route path="/easy" exact render={(props) => <Easy handleClick={this.props.handleClick}  webpage={this.props.webpage} changeLevel={this.changeLevel} />} />
          <Route path="/medium" exact render={(props) => <Medium handleClick={this.props.handleClick}  webpage={this.props.webpage} changeLevel={this.changeLevel} />} />
          <Route path="/hard" exact render={(props) => <Hard handleClick={this.props.handleClick}  webpage={this.props.webpage} changeLevel={this.changeLevel} />} />
          <Route path="/correct" exact render={(props) => <Correct level={this.state.level} nextQuestion={this.props.gameStart} />} />
          <Route path="/wrong" exact render={(props) => <Wrong level={this.state.level} nextQuestion={this.props.gameStart} />} />
        </Aux>
    )
  }
}

export default Quiz;
