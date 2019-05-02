import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import classes from './levelChoices.css';
import Button from '../../UI/Button/button';

class LevelChoices extends Component {

  render() {
    return (
      <div className={classes.LevelChoices}>
        <h2>Please choose the Level you wish to play:</h2>
        <Button><Link class="easy" to="/easy">Easy</Link></Button>
        <Button><Link class="medium" to="/medium">Medium</Link></Button>
        <Button><Link class="hard" to="/hard">Hard</Link></Button>
      </div>
    )
  }

}

export default LevelChoices;
