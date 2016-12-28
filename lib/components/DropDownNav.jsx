import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactTransitionGroup from 'react-addons-transition-group'
import { TweenMax, staggerFrom, staggerTo, Power2, Bounce } from 'gsap'

export default class DropDownNav extends Component {
  componentDidMount() {
    this.gsapAnimationIn()
  }
  componentWillLeave(callback) {
    console.log('Im out')
    setTimeout(() => {
      callback()
    }, 1000)
    this.gsapAnimationOut()
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
        ease: Power2.easeOut,
        onComplete: callback,
      },
    )
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
              activeClassName="active"
            >About</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.two = c }}
          >
            <Link
              to="/Projects"
              onClick={this.props.toggleNavClosed}
              activeClassName="active"
            >Projects</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.three = c }}
          >
            <Link
              to="/Contact"
              onClick={this.props.toggleNavClosed}
              activeClassName="active"
            >Contact</Link>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.four = c }}
          >
            <a
              href="https://medium.com/@lacey.k"
              target="_blank"
              rel="noopener noreferrer"
            >Blog</a>
          </li>
        </ul>
      </nav>
    )
  }
}
