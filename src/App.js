import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Quiz from './Containers/Quiz/quiz';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Quiz />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
