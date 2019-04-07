import React, { Component } from 'react';
import Layout from './Components/Layout/layout';
import Introduction from './Containers/Introduction/introduction';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Introduction />
        </Layout>
      </div>
    );
  }
}

export default App;
