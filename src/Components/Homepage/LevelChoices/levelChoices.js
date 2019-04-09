import React from 'react'
import { Link } from 'react-router-dom';
import classes from './levelChoices.css';
import Button from '../../UI/Button/button';

const levelChoices = (props) => {
  return (
    <div className={classes.LevelChoices}>
      <h2>Please choose the Level you wish to play:</h2>
      <Button><Link to="/easy">Easy</Link></Button>
      <Button><Link to="/medium">Medium</Link></Button>
      <Button><Link to="/hard">Hard</Link></Button>
    </div>
  )
}

export default levelChoices;
