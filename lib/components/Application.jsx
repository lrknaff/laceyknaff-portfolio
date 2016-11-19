import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Back } from 'gsap'

import SplitLeftMain from './SplitLeftMain'
import SplitRightAbout from './SplitRightAbout'

export default class Application extends Component {
  // componentDidMount() {
  //   const node = this.node
  //   TweenMax.to(node, 5, { x: 299 })
  // }
  render() {
    return (
      <article className="split-container">
        <SplitLeftMain />
        <SplitRightAbout />
        {/* <h1 ref={(c) => { this.node = c }}>Hello!</h1> */}
      </article>
    )
  }
}
