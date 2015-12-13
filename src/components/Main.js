import React, { Component } from 'react'
import { Link } from 'react-router'

import 'bootstrap/less/bootstrap.less'
import "../css/style.less"

export default class App extends Component {
  render() {
    return (

      <div className="container">
        <h1>Hello World!</h1>
        <div>
          <ul className="testClass">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>

    );
  }
}
