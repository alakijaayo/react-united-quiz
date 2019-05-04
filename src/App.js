import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Quiz from './Containers/Quiz/quiz';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      score: 0,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout
            number={this.state.number}
            score={this.state.score}>
            <Quiz />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
