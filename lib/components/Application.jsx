import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Back } from 'gsap'

import Loader from './Loader'
import SplitLeftMain from './SplitLeftMain'
import SplitRightMain from './SplitRightMain'
import SplitRightAbout from './SplitRightAbout'
import HamburgerNav from './HamburgerNav'

export default class Application extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     loaded: false,
  //   }
  // }
  // componentDidMount() {
  //   this.onSuccess()
  // }
  // onSuccess() {
  //   this.setState({ loaded: true })
  // }
  render() {
    return (
      <article className="split-container">
        <SplitLeftMain />
        <SplitRightMain />
      </article>
      // <div className="main-container">
      //   {this.state.loaded ?
      //     <article className="split-container">
      //       <Loader />
      //       <SplitLeftMain />
      //       <SplitRightMain />
      //     </article> :
      //     <Loader />}
      // </div>
    )
  }
}
