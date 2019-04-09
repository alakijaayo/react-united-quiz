import React from 'react';
import unitedLogo from '../../Assets/Images/manchester-united-logo.png';
import { Link } from 'react-router-dom';
import classes from './logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <Link to="/"><img src={unitedLogo} alt="UnitedQuiz"/></Link>
  </div>
)

export default logo;
