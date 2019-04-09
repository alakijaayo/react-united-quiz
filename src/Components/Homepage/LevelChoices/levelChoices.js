import React from 'react'
import classes from './levelChoices.css';
import Button from '../../UI/Button/button';

const levelChoices = (props) => {
  return (
    <div className={classes.LevelChoices}>
      <h2>Please choose the Level you wish to play:</h2>
      <Button><a href="/">Easy</a></Button>
      <Button><a href="/">Medium</a></Button>
      <Button><a href="/">Hard</a></Button>
    </div>
  )
}

export default levelChoices;
