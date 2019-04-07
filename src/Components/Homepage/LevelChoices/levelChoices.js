import React from 'react'
import classes from './levelChoices.css';
import Button from '../../UI/Button/button';

const levelChoices = (props) => {
  return (
    <div className={classes.LevelChoices}>
      <h2>Please choose the Level you wish to play:</h2>
      <Button>Easy</Button>
      <Button>Medium</Button>
      <Button>Hard</Button>
    </div>
  )
}

export default levelChoices;
