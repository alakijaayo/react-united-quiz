import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';
import Score from '../../Count/Score/score'
import QuestionNumber from '../../Count/QuestionNumber/questionNumber'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <QuestionNumber question={props.number} />
    <Logo />
    <Score score={props.score} />
  </header>
)

export default toolbar;
