import React, { Component } from 'react'
import HamburgerNav from './HamburgerNav'
import DropDownNav from './DropDownNav'
import SplitRightAbout from './SplitRightAbout'

export default class SplitRightMain extends Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
    }
  }
  render() {
    return (
      <section
        className="split-item split-right-container"
      >
        <HamburgerNav
          toggleNavOpen={() => { this.setState({ navOpen: !this.state.navOpen }) }}
          navOpen={this.state.navOpen}
        />
        {this.state.navOpen ?
          <DropDownNav /> :
          null}
      </section>
    )
  }
}
