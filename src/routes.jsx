import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import GlobalStyle from './components/GlobalStyle';

const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={ContactPage}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
