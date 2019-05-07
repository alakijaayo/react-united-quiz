import React, { Component } from 'react';
import classes from './final.css'

const hated = ["Manchester City", "Leeds United", "Liverpool"]
const mildHate = ["Arsenal", "Tottenham Hotspur", "Chelsea"]

class Final extends Component {
  constructor(props) {
    super()
    this.state = {
      losers: hated[Math.floor(Math.random() * hated.length)],
      midLoser: mildHate[Math.floor(Math.random() * mildHate.length)]
    }
  }

  render() {
    let grade = this.props.finalScore
    let response;

    if (grade <= 8) {
      response = <h1 className={classes.TextResult}>Are you a {this.state.losers} fan??</h1>
    } else if ((grade >= 9) && (grade <= 14)){
      response = <h1 className={classes.TextResult}>You could always be a {this.state.midLoser} fan. They may take you</h1>
    } else if ((grade >= 15) && (grade <= 19)) {
      response = <h1 className={classes.TextResult}>Showing your United Colours there!</h1>
    } else {
      response = <h1 className={classes.TextResult}>United is all you know! It runs in your veins everyday!!</h1>
    }

    return (
      <div>
        <h1 className={classes.Text}>You got {this.props.finalScore} out of 25</h1>
        {response}
      </div>

    )
  }
}

export default Final
