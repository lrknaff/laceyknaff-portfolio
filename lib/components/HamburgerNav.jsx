import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class HamburgerNav extends Component {
  render() {
    return (
      <Link
        to={this.props.navOpen ? '/public' : '/Nav'}
        className={this.props.navOpen ? 'hamburger-nav open' : 'hamburger-nav closed'}
        onClick={this.props.toggleNavOpen}
      >
        <span />
        <span />
        <span />
        <span />
      </Link>
    )
  }
}
