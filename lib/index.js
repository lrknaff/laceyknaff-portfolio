import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'

import Application from './components/Application'
import SplitRightAbout from './components/SplitRightAbout'
import SplitRightContact from './components/SplitRightContact'
import DropDownNav from './components/DropDownNav'

// require('./images/header-logo.svg')

// import firebase from './firebase'

import './styles/index.scss'
// require('./style.scss')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={SplitRightAbout} />
      <Route path="/about" component={SplitRightAbout} />
      <Route path="/nav" component={DropDownNav} />
      <Route path="/contact" component={SplitRightContact} />
    </Route>
  </Router>

  , document.getElementById('react-container')
)
// render(<Application />, document.getElementById('react-container'))
