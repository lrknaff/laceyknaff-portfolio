import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class DropDownNav extends Component {
  componentDidMount() {
    this.gsapAnimationIn()
    // this.drawLine()
  }
  componentWillLeave(callback) {
    this.gsapAnimationOut(callback())
  }
  gsapAnimationIn() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerFrom(
      [e1, e2, e3, e4],
      1,
      {
        opacity: 0,
        y: 50,
        delay: 0.2,
        ease: Power2.easeOut },
      0.12)
  }
  gsapAnimationOut() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerTo(
      [e1, e2, e3, e4],
      1,
      {
        opacity: 0,
        y: 50,
        delay: 0.2,
        ease: Power2.easeIn },
      0.12)
  }
  // drawLine() {
  //   TweenMax.staggerFrom('.draw-me', 2, { drawSVG: 0 }, 0.1)
  // }
  render() {
    return (
      <nav className="split-right">
        <ul className="full-screen-nav">

          <li
            className="about-link menu-item"
            ref={(c) => { this.one = c }}
          >
            <Link
              to="/about"
              // onClick={this.props.expandAboutPage}
              activeStyle={{ color: 'orange' }}
            >About</Link>
          </li>

          <li
            className="menu-item"
            ref={(c) => { this.two = c }}
          >
            <Link
              to="/projects"
              activeStyle={{ color: 'orange' }}
            >Projects</Link>
          </li>

          <li
            className="menu-item"
            ref={(c) => { this.three = c }}
          >
            <Link
              to="/contact"
              // onClick={this.props.expandContactForm}
              activeStyle={{ color: 'orange' }}
            >Contact</Link>
          </li>

          <li
            className="menu-item"
            ref={(c) => { this.four = c }}
          >
            <a href="#Blog">Blog</a>
          </li>
        </ul>
      </nav>
    )
  }
}
