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
      aboutExpanded: true,
      contactExpanded: false,
      projectsExpanded: false,
      rememberOpen: 'About',
      mounted: 0,
    }
  }
  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen,
      aboutExpanded: false,
      contactExpanded: false,
      mounted: 1,
    })
  }
  expandAboutPage() {
    this.setState({
      aboutExpanded: !this.state.aboutExpanded,
      navOpen: false,
      contactExpanded: false,
      rememberOpen: 'About',
    })
  }
  expandContactForm() {
    this.setState({
      contactExpanded: !this.state.contactExpanded,
      navOpen: false,
      aboutExpanded: false,
      rememberOpen: 'Contact',
    })
  }
  expandProjectsPage() {

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
          <SplitRightAbout
            expandContactForm={this.expandContactForm.bind(this)}
          /> :
          null}

        {this.state.navOpen ?
          <DropDownNav
            toggleNavOpen={this.toggleNav.bind(this)}
            expandAboutPage={this.expandAboutPage.bind(this)}
            expandContactForm={this.expandContactForm.bind(this)}
          /> :
          null}

        {this.state.contactExpanded ?
          <SplitRightContact /> :
          null}
      </section>
    )
  }
}
