import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power4 } from 'gsap'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class ProjectsFullPage extends Component {
  componentDidMount() {
    this.gsapAnimationBackground()
  }
  gsapAnimationBackground() {
    const e = this.background

    TweenMax.to(
      e,
      1,
      {
        height: '100%',
        ease: Power4.easeIn },
      0.12)
  }
  render() {
    return (
      <section
        className="full-screen"
        ref={(c) => { this.background = c }}
      >
        <div className="row">
          <div className="project-grid project-grid-1">1</div>
          <div className="project-grid project-grid-2">2</div>
          <div className="project-grid project-grid-3">3</div>
        </div>
        <div className="row">
          <div className="project-grid project-grid-4">4</div>
          <div className="project-grid project-grid-5">5</div>
          <div className="project-grid project-grid-6">6</div>
        </div>
      </section>
    )
  }
}
