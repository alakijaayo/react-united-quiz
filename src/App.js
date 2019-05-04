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
    this.updateNumber = this.updateNumber.bind(this)
    this.updateScoreAndNumber = this.updateScoreAndNumber.bind(this)
  }

  updateNumber = () => {
    this.setState({number: this.state.number + 1})
    console.log(this.state.number)
  }

  updateScoreAndNumber = () => {
    this.setState({number: this.state.number + 1, score: this.state.score + 1})
    console.log(this.state.score)
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
             updateNumber={this.updateNumber}
             updateScoreAndNumber={this.updateScoreAndNumber}
            />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
