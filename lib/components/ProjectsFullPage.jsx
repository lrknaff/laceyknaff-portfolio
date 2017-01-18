import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2 } from 'gsap'
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
    this.gsapAnimationProjectCopy()
  }
  gsapAnimationProjectCopy() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four
    const e5 = this.five

    TweenMax.staggerFrom(
      [e1, e2, e3, e4, e5],
      1,
      {
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: Power2.easeOut },
      0.12)
  }
  handleScroll() {
    // if (this.state.index < 5) {
    //   this.setState({ index: this.state.index + 1 })
    // } this.setState({ index: this.state.index + 0 })
  }
  handlePaginationClick(e) {
    e.preventDefault()
    const value = parseInt(e.target.value, 10)
    console.log(e.target.value)
    this.setState({ index: value })
    this.gsapAnimationProjectCopy()
  }
  render() {
    return (
      <article>
        <section className="split-right split-right-container split-right-projects">
          <section className="split-right-project-copy">
            <h4 ref={(c) => { this.one = c }}>{Projects[this.state.index].title}</h4>
            <p ref={(c) => { this.two = c }}>{Projects[this.state.index].description}</p>
            <p ref={(c) => { this.three = c }}>
              <a
                href={Projects[this.state.index].github}
                target="_blank"
                rel="noopener noreferrer"
              >view on GitHub</a>
            </p>
            <h6 ref={(c) => { this.four = c }}>Skills used: {Projects[this.state.index].skills}</h6>
            <a
              ref={(c) => { this.five = c }}
              href={Projects[this.state.index].url}
              target="_blank"
              rel="noopener noreferrer"
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
