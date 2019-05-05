import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Quiz from './Containers/Quiz/quiz';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      number: 0,
      score: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice, answer) {
    if(choice === answer) {
      this.setState({number: this.state.number + 1, score: this.state.score + 1})
    } else this.setState({number: this.state.number + 1})
  }

  correct = (correct, answer) => correct === answer ? "correct" : "wrong"

  gameRestart = () => this.setState({number: 0, score: 0})

  gameStart = () => this.setState({number: this.state.number + 1})

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout
            number={this.state.number}
            score={this.state.score}
            restart={this.gameRestart}
          >
            <Quiz
             handleClick={this.handleClick}
             gameStart={this.gameStart}
             webpage={this.correct}
            />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
