import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'

// require('./images/header-logo.svg')

import Application from './components/Application'
import SplitRightAbout from './components/SplitRightAbout'
import SplitRightContact from './components/SplitRightContact'
import DropDownNav from './components/DropDownNav'

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
