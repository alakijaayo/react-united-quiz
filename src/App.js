import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Quiz from './Containers/Quiz/quiz';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      score: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice, answer) {
    if(choice === answer) {
      this.setState({number: this.state.number + 1, score: this.state.score + 1})
      console.log(this.state.number)
    } else this.setState({number: this.state.number + 1})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout
            number={this.state.number}
            score={this.state.score}
          >
            <Quiz
             handleClick={this.handleClick}
            />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
