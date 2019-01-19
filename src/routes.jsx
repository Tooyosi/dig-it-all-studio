import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import About from './components/About';
import Services from './components/Services';
import GlobalStyle from './components/GlobalStyle';

const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
