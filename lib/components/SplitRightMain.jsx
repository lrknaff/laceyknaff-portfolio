import React, { Component } from 'react'
import HamburgerNav from './HamburgerNav'
import DropDownNav from './DropDownNav'
import SplitRightAbout from './SplitRightAbout'

export default class SplitRightMain extends Component {
  render() {
    return (
      <section
        className="split-item split-right-container"
      >
        <DropDownNav />
        <HamburgerNav />
        <SplitRightAbout />
      </section>
    )
  }
}
