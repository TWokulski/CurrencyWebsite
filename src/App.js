import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import Currency from './components/Pages/Currency';
import Converty from './components/Pages/Converty';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
            <Route
              path="/currency"
              component={Currency}
            />
            <Route
              path="/converty"
              component={Converty}
            />

          </PageWrapper>
        </Router>
      </div>
    );
  }
}
export default App;
