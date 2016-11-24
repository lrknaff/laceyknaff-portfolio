import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class DropDownNav extends Component {
  componentDidMount() {
    this.gsapAnimation()
    // this.drawLine()
  }
  gsapAnimation() {
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
  // drawLine() {
  //   TweenMax.staggerFrom('.draw-me', 2, { drawSVG: 0 }, 0.1)
  // }
  render() {
    return (
      <nav className="split-right">
        <ul className="full-screen-nav">
          <li
            className="about-link menu-item"
            ref={(c) => { this.one = c }}
          ><a href="#About">About</a>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.two = c }}
          ><a href="#Projects">Projects</a>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.three = c }}
          ><a href="#Projects">Contact</a>
          </li>
          <li
            className="menu-item"
            ref={(c) => { this.four = c }}
          ><a href="#Projects">Blog</a>
          </li>
        </ul>
      </nav>
    )
  }
}
