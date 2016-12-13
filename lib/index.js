import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'

import Application from './components/Application'
import SplitRightAbout from './components/SplitRightAbout'
import SplitRightContact from './components/SplitRightContact'

// require('./images/header-logo.svg')

import './styles/index.scss'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={SplitRightAbout} />
      <Route path="/about" component={SplitRightAbout} />
      <Route path="/contact" component={SplitRightContact} />
    </Route>
  </Router>

  , document.getElementById('react-container')
)
