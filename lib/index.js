
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'

import Application from './components/Application'
import Home from './components/Home'
import SplitRightAbout from './components/SplitRightAbout'
import SplitRightContact from './components/SplitRightContact'

import './styles/index.scss'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/public" component={Application}>
      <IndexRoute component={Home} />
      <Route path="/About" component={SplitRightAbout} />
      <Route path="/Contact" component={SplitRightContact} />
    </Route>
  </Router>

  , document.getElementById('react-container')
)
