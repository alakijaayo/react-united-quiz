import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import classes from './levelChoices.css';
import Button from '../../UI/Button/button';

class LevelChoices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: 1
    }
  }
  changeNumber = () => {
    this.props.onChangeNumber(this.state.question);
  }
  render() {
    return (
      <div className={classes.LevelChoices}>
        <h2>Please choose the Level you wish to play:</h2>
        <Button><Link onClick={this.changeNumber.bind(this)} to="/easy">Easy</Link></Button>
        <Button><Link onClick={this.changeNumber.bind(this)} to="/medium">Medium</Link></Button>
        <Button><Link onClick={this.changeNumber.bind(this)} to="/hard">Hard</Link></Button>
      </div>
    )
  }

}

export default LevelChoices;
