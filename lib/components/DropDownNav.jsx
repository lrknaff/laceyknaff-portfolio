import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class DropDownNav extends Component {
  componentDidMount() {
    this.gsapAnimationIn()
  }
  componentWillLeave(callback) {
    this.gsapAnimationOut()
    setTimeout(() => {
      callback()
    }, 400)
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
  render() {
    return (
      <nav className="split-right">
        <ul className="full-screen-nav">
          <li
            className="about-link menu-item"
            ref={(c) => { this.one = c }}
          > 
            <a
              href="#About"
              onClick={this.props.expandAboutPage}
            >About</a>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.two = c }}
          >
            <a href="#Projects">Projects</a>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.three = c }}
          >
            <a
              href="#Contact"
              onClick={this.props.expandContactForm}
            >Contact</a>
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
