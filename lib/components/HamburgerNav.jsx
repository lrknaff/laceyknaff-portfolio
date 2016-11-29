import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class HamburgerNav extends Component {
  render() {
    return (
      <Link
        to="/nav"
        className="hamburger-nav closed"
        activeClassName="hamburger-nav open"
        // onClick={this.props.toggleNavOpen}
      >
        <span />
        <span />
        <span />
        <span />
      </Link>
    )
  }
}
