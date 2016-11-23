import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'
import HamburgerNav from './HamburgerNav'

export default class SplitRightAbout extends Component {
  componentDidMount() {
    // this.gsapAnimation()
    window.addEventListener('scroll', this.handleScroll)
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerFrom([e1, e2, e3, e4], 1, { opacity: 0, scale: 0.5, y: 50, delay: 0.5, ease: Power2.easeOut }, 0.2)
  }
  handleScroll() {
    console.log(window.pageYOffset)
  }
  render() {
    return (
      <section className="split-item split-right-container">
        <HamburgerNav />

      <section id="about-me" className="section-spacing">
        <h4>About</h4>
        <p>Lacey is a designer and front-end developer based in Denver, Colorado. She's in love with everything design and development, and has a passion for turning complex ideas into simple, purpose driven, solutions. After dabbling in far to many design related fields she finally found her passion for developing and designing on the web and is known for her clean and minimal design aesthetic. Her other passions include working on her vintage motorcycle, drinking beer on patios, riding her bike down mountains, shredding the gnar, and being a kind human being. She also thinks her dog might be cooler than she is.<span><br />These are some skills and programs she uses along the way:</span></p>
        <ul className="skills">
          <li><span>Adobe Illustrator/InDesign/Photoshop/XD</span></li>
          <li><span>Sketch</span></li>
          <li><span>HTML/CSS</span></li>
          <li><span>JavaScript/JQuery</span></li>
          <li><span>GitHub</span></li>
        </ul>
      </section>
      </section>
    )
  }
}
