import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import classes from './levelChoices.css';
import Button from '../../UI/Button/button';

class LevelChoices extends Component {
  render() {
    return (
      <div className={classes.LevelChoices}>
        <h2>Please choose the Level you wish to play:</h2>
        <Link class="easy" to="/easy" onClick={this.props.gameStart}><Button>Easy</Button></Link>
        <Link class="medium" to="/medium" onClick={this.props.gameStart}><Button>Medium</Button></Link>
        <Link class="hard" to="/hard" onClick={this.props.gameStart}><Button>Hard</Button></Link>
      </div>
    )
  }

}

export default LevelChoices;
