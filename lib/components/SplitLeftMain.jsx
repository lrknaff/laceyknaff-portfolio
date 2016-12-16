import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class SplitLeftMain extends Component {
  componentDidMount() {
    this.gsapAnimation()
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerFrom([e1, e2, e3, e4], 1, { opacity: 0, y: 50, delay: 0.5, ease: Power2.easeOut }, 0.12)

    // const node = this.node
    // TweenMax.to(node, 1, { opacity: 0, y: -5 })
  }
  render() {
    return (
      <section className="split-item split-left-container">
        <div className="split-left-text-block">
          <h1
            className="split-left-text"
            ref={(c) => { this.one = c }}
          >Hi, I'm Lacey.
          </h1>
          <h3
            className="split-left-text"
            ref={(c) => { this.two = c }}
          >Graphic Designer and Front-End Developer.
          </h3>
          <div ref={(c) => { this.three = c }}>
            <Link
              to="/Contact"
            >
              <button
                className="button"
              >say hello
              </button>
            </Link>
          </div>
          <div
            className="split-left-social"
            ref={(c) => { this.four = c }}
          >
            <a href="https://twitter.com/laceyknaff">
              <img
                src="../lib/images/twitter.svg"
                className="social-icon"
                alt="twitter"
              />
            </a>
            <a href="https://github.com/lrknaff">
              <img
                src="../lib/images/gitHub.svg"
                className="social-icon"
                alt="git hub"
              />
            </a>
            <a href="https://www.linkedin.com/in/lacey-knaff-7a503233">
              <img
                src="../lib/images/linkedin.svg"
                className="social-icon"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </section>
    )
  }
}
