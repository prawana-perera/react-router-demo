import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={Main}/>
    </Route>
  </Router>
), document.getElementById('root'))
