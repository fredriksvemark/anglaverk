import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'

import Main from './pages/Main/Main'
import About from './pages/About/About'
import Paintings from './pages/Paintings/Paintings'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path='/paintings' component={Paintings} />
        <Route path='/about' component={About} />
    </Route>
  </Router>
), document.getElementById('root'))
