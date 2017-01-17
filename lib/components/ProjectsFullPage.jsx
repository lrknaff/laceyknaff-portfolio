import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power4 } from 'gsap'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class ProjectsFullPage extends Component {
  componentDidMount() {
    this.gsapAnimationBackground()
  }
  gsapAnimationBackground() {
    const e = this.view

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
      <article>
        <section className="split-right split-right-container split-right-projects">
          <div>Project Descriptions</div>
          <div className="project-nav">
            <div className="project-scroll-nav" />
            <div className="project-scroll-nav" />
            <div className="project-scroll-nav" />
            <div className="project-scroll-nav" />
          </div>
        </section>
        <section className="split-left-container split-left-projects">
          <div>Project View</div>
        </section>
      </article>
    )
  }
}
