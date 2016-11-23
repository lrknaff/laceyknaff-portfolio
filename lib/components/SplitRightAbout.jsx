import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class SplitRightAbout extends Component {
  componentDidMount() {
    this.gsapAnimation()
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerFrom([e1, e2, e3, e4], 1, { opacity: 0, scale: 0.5, y: 50, delay: 0.5, ease: Power2.easeOut }, 0.2)
  }
  render() {
    return (
      <section className="split-item split-right-container">
        <h1 className="split-left-text fade-in-up">Hi, I'm Lacey.</h1>
        <h3 className="split-left-text fade-in-up">Graphic Designer and Front-End Developer.</h3>
        <button className="button fade-in-up">say hello</button>
        <div className="split-left-social">
          <a href="https://twitter.com/laceyknaff">
            <img
              src="../lib/images/twitter.svg"
              className="social-icon"
              alt="twitter"
            />
          </a>
          <a href="https://github.com/lrknaff">
            <img
              src="../lib/images/gitHub.svg"
              className="social-icon"
              alt="git hub"
            />
          </a>
          <a href="https://www.linkedin.com/in/lacey-knaff-7a503233">
            <img
              src="../lib/images/linkedin.svg"
              className="social-icon"
              alt="linkedin"
            />
          </a>
        </div>
      </section>
    )
  }
}
