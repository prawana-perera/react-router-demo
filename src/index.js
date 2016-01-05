import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={Main}/>
    </Route>
  </Router>
), document.getElementById('root'))
