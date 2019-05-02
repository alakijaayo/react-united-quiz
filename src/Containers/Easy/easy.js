import React, { Component } from 'react';
import LowerToolbar from '../../Components/Navigation/LowerToolbar/lowerToolbar';
import data from '../../Data/easy.json';
import classes from './easy.css';

class Easy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      score: 0,
      questions: data.easy[Math.floor(Math.random() * data.easy.length)]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    if(choice === this.state.questions.correct) {
      this.setState({number: this.state.number + 1, score: this.state.score + 1})
    } else this.setState({number: this.state.number + 1})
  }

  render() {
    return (
      <div>
        <h1>{this.state.questions.question}</h1>
        <button className={classes.ButtonA} onClick={() => this.handleClick(this.state.questions.option_a)}>{this.state.questions.option_a}</button>
        <button className={classes.ButtonB} onClick={() => this.handleClick(this.state.questions.option_b)}>{this.state.questions.option_b}</button>
        <button className={classes.ButtonC} onClick={() => this.handleClick(this.state.questions.option_c)}>{this.state.questions.option_c}</button>
        <button className={classes.ButtonD} onClick={() => this.handleClick(this.state.questions.option_d)}>{this.state.questions.option_d}</button>
        <LowerToolbar
          number={this.state.number}
          score={this.state.score} />
      </div>

    )
  }
}

export default Easy;
