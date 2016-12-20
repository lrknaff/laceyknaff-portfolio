import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactTransitionGroup from 'react-addons-transition-group'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class DropDownNav extends Component {
  componentDidMount() {
    this.gsapAnimationIn()
  }
  componentWillLeave(callback) {
    console.log('Im out')
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
  gsapAnimationOut(callback) {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerTo(
      [e1, e2, e3, e4],
      1,
      {
        opacity: 0,
        y: -50,
        delay: 0.2,
        ease: Power2.easeIn,
        onComplete: callback,
      },
      0.12)
  }
  render() {
    return (
      <nav className="split-right split-right-nav">
        <ul className="full-screen-nav">
          <li
            className="about-link menu-item"
            ref={(c) => { this.one = c }}
          >
            <Link
              to="/About"
              onClick={this.props.toggleNavClosed}
            >About</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.two = c }}
          >
            <Link
              to="/Projects"
              onClick={this.props.toggleNavClosed}
            >Projects</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.three = c }}
          >
            <Link
              to="/Contact"
              onClick={this.props.toggleNavClosed}
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
