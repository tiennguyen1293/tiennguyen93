import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import WelcomeSceen from './WelcomeSceen';
import ResumeScreen from './ResumeScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <PageTransition timeout={500}>
              <Switch location={location}>
                <Route exact path="/" component={WelcomeSceen} />
                {/* <Route path="/list" component={List}/> */}
                <Route path="/item" component={ResumeScreen} />
              </Switch>
            </PageTransition>
          )}
        />
      </Router>
    );
  }
}

export default App;
