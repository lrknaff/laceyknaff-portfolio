import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Back } from 'gsap'

import Loader from './Loader'
import SplitRightAbout from './SplitRightAbout'

export default class Application extends Component {
  render() {
    return (
      <section className="split-item split-right-container">
        <SplitRightAbout />
      </section>
    )
  }
}
