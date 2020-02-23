import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LandingPage } from './content/index';
import { Navbar } from './components/index';
import './app.scss';

const App = ({store}) => (
  <Provider store={store}>
    <Navbar />
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  </Provider>
);

export default App;
