import React from 'react';
import unitedLogo from '../../Assets/Images/manchester-united-logo.png';
import classes from './logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={unitedLogo} alt="UnitedQuiz"/>
  </div>
)

export default logo;
