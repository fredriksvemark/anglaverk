import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Main.css';
import NavLink from '../NavLink'

class Main extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/paintings">Paintings</NavLink></li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default Main;
