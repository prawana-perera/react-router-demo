import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('root'))
