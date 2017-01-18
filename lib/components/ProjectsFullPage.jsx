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
  handleScroll() {
    if (this.state.index < 5) {
      this.setState({ index: this.state.index + 1 })
    } this.setState({ index: this.state.index + 0 })
  }
  handlePaginationClick(e) {
    // e.preventDefault()
    const value = parseInt(e.target.value, 10)
    this.setState({ index: value })
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
            <button
              value="0"
              onClick={this.handlePaginationClick.bind(this)}
            >
              <div
                className="project-scroll-nav"
                id={this.state.index === 0 ? 'project-scroll-active' : null}
              />
            </button>
            <button
              value="1"
              onClick={this.handlePaginationClick.bind(this)}
            >
              <div
                className="project-scroll-nav"
                id={this.state.index === 1 ? 'project-scroll-active' : null}
              />
            </button>
            <button
              value="2"
              onClick={this.handlePaginationClick.bind(this)}
            >
              <div
                className="project-scroll-nav"
                id={this.state.index === 2 ? 'project-scroll-active' : null}
              />
            </button>
            <button
              value="3"
              onClick={this.handlePaginationClick.bind(this)}
            >
              <div
                className="project-scroll-nav"
                id={this.state.index === 3 ? 'project-scroll-active' : null}
              />
            </button>
            <button
              value="4"
              onClick={this.handlePaginationClick.bind(this)}
            >
              <div
                className="project-scroll-nav"
                id={this.state.index === 4 ? 'project-scroll-active' : null}
              />
            </button>
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
