import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power4 } from 'gsap'
import { Router, Route, Link, browserHistory } from 'react-router'
import Projects from '../projects/projects.js'

export default class ProjectsFullPage extends Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
  }
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
          <section className="split-right-project-copy">
            <h4>{Projects[this.state.index].title}</h4>
            <p>{Projects[this.state.index].description}</p>
            <h6>Skills used: {Projects[this.state.index].skills}</h6>
            <a
              href={Projects[this.state.index].url}
              target="blank"
            >
              <button
                className="button light-background-button"
              >view</button>
            </a>
          </section>
          <div className="project-nav">
            <div className="project-scroll-nav" />
            <div className="project-scroll-nav" />
            <div className="project-scroll-nav" />
            <div className="project-scroll-nav" />
          </div>
        </section>

        <section
          className="split-left-container split-left-projects"
          id={Projects[this.state.index].id}
        >
          <div>
            <img src={Projects[this.state.index].image1} />
          </div>
        </section>
      </article>
    )
  }
}
