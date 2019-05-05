import React from 'react';
import classes from './questionnaire.css'
import { Link } from 'react-router-dom';

const questionnaire = (props) => {
  return(
    <div>
      <h1 className={classes.Text}>{props.questions.question}</h1>
      <Link class={props.correct(props.questions.option_a)} to={`/${props.correct(props.questions.option_a)}`}><button className={classes.ButtonA} onClick={() => props.handleClick(props.questions.option_a, props.questions.correct)}>{props.questions.option_a}</button></Link>
      <Link class={props.correct(props.questions.option_b)} to={`/${props.correct(props.questions.option_b)}`}><button className={classes.ButtonB} onClick={() => props.handleClick(props.questions.option_b, props.questions.correct)}>{props.questions.option_b}</button></Link>
      <Link class={props.correct(props.questions.option_c)} to={`/${props.correct(props.questions.option_c)}`}><button className={classes.ButtonC} onClick={() => props.handleClick(props.questions.option_c, props.questions.correct)}>{props.questions.option_c}</button></Link>
      <Link class={props.correct(props.questions.option_d)} to={`/${props.correct(props.questions.option_d)}`}><button className={classes.ButtonD} onClick={() => props.handleClick(props.questions.option_d, props.questions.correct)}>{props.questions.option_d}</button></Link>
    </div>
  )
}

export default questionnaire;
