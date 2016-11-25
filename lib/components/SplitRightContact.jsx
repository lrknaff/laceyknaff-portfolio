import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class SplitRightAbout extends Component {
  constructor() {
    super()
    this.state = {
      mounted: 0,
    }
  }
  componentDidMount() {
    this.gsapAnimationSlow()
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four
    const e5 = this.five
    const e6 = this.six
    const e7 = this.seven
    const e8 = this.eight
    const e9 = this.nine
    const e10 = this.ten

    TweenMax.staggerFrom(
      [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10],
      1,
      {
        opacity: 0,
        y: 50,
        delay: 1.2,
        ease: Power2.easeOut },
      0.12)
  }
  render() {
    return (
      <section className="split-right">
        <form>
          <input />
        </form>
      </section>
    )
  }
}
