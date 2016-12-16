import React, { Component } from 'react'
import HamburgerNav from './HamburgerNav'
import DropDownNav from './DropDownNav'
import SplitRightAbout from './SplitRightAbout'
import SplitRightContact from './SplitRightContact'

export default class SplitRightMain extends Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
    }
  }
  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }
  render() {
    return (
      <section
        className="split-item split-right-container split-right-nav-container"
      >
        <HamburgerNav
          toggleNavOpen={this.toggleNav.bind(this)}
          navOpen={this.state.navOpen}
        />
      </section>
    )
  }
}
