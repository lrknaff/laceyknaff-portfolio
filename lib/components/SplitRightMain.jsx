import React, { Component } from 'react'
import HamburgerNav from './HamburgerNav'
import DropDownNav from './DropDownNav'
import SplitRightAbout from './SplitRightAbout'

export default class SplitRightMain extends Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
      aboutExpanded: true,
    }
  }
  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen, aboutExpanded: !this.state.aboutExpanded })
  }
  render() {
    return (
      <section
        className="split-item split-right-container"
      >
        <HamburgerNav
          toggleNavOpen={this.toggleNav.bind(this)}
          navOpen={this.state.navOpen}
        />
        {this.state.aboutExpanded ?
          <SplitRightAbout /> :
          null}
        {this.state.navOpen ?
          <DropDownNav
            toggleNavOpen={this.toggleNav.bind(this)}
          /> :
          null}
      </section>
    )
  }
}
