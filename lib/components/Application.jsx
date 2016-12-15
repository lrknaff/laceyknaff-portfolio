import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Back } from 'gsap'

import Loader from './Loader'
import SplitLeftMain from './SplitLeftMain'
import SplitRightMain from './SplitRightMain'
import HamburgerNav from './HamburgerNav'

export default class Application extends Component {
  render() {
    return (
      <article className="split-container">
        <SplitLeftMain />
        <SplitRightMain />
        {this.props.children}
      </article>
    )
  }
}
