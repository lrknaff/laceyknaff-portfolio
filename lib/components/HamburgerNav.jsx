import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class HamburgerNav extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }
  toggleClass() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div
        className={this.state.open ? 'hamburger-nav open' : 'hamburger-nav closed' }
        onClick={() => { this.setState({ open: !this.state.open }) }}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  }
}
