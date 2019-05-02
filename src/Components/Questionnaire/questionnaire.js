import React from 'react';
import classes from './questionnaire.css'

const questionnaire = (props) => {
  return(
    <div>
      <h1 className={classes.Text}>{props.questions.question}</h1>
      <button className={classes.ButtonA} onClick={() => props.handleClick(props.questions.option_a)}>{props.questions.option_a}</button>
      <button className={classes.ButtonB} onClick={() => props.handleClick(props.questions.option_b)}>{props.questions.option_b}</button>
      <button className={classes.ButtonC} onClick={() => props.handleClick(props.questions.option_c)}>{props.questions.option_c}</button>
      <button className={classes.ButtonD} onClick={() => props.handleClick(props.questions.option_d)}>{props.questions.option_d}</button>
    </div>
  )
}

export default questionnaire;
