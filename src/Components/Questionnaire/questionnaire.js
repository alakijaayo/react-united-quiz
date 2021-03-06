import React from 'react';
import classes from './questionnaire.css'
import { Link } from 'react-router-dom';

const questionnaire = (props) => {
  return(
    <div>
      <h1 className={classes.Text}>{props.questions.question}</h1>
      <Link to={`/${props.webpage(props.questions.option_a, props.questions.correct)}`}><button className={classes.ButtonA} onClick={() => {props.handleClick(props.questions.option_a, props.questions.correct); props.changeLevel(props.level)}} data-cy={props.webpage(props.questions.option_a, props.questions.correct)}>{props.questions.option_a}</button></Link>
      <Link to={`/${props.webpage(props.questions.option_b, props.questions.correct)}`}><button className={classes.ButtonB} onClick={() => {props.handleClick(props.questions.option_b, props.questions.correct); props.changeLevel(props.level)}} data-cy={props.webpage(props.questions.option_b, props.questions.correct)}>{props.questions.option_b}</button></Link>
      <Link to={`/${props.webpage(props.questions.option_c, props.questions.correct)}`}><button className={classes.ButtonC} onClick={() => {props.handleClick(props.questions.option_c, props.questions.correct); props.changeLevel(props.level)}} data-cy={props.webpage(props.questions.option_c, props.questions.correct)}>{props.questions.option_c}</button></Link>
      <Link to={`/${props.webpage(props.questions.option_d, props.questions.correct)}`}><button className={classes.ButtonD} onClick={() => {props.handleClick(props.questions.option_d, props.questions.correct); props.changeLevel(props.level)}} data-cy={props.webpage(props.questions.option_d, props.questions.correct)}>{props.questions.option_d}</button></Link>
    </div>
  )
}

export default questionnaire;
