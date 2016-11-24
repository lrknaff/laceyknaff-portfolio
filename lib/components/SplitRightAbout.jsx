import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'
import HamburgerNav from './HamburgerNav'

export default class SplitRightAbout extends Component {
  componentDidMount() {
    this.gsapAnimation()
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  gsapAnimation() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    TweenMax.staggerFrom([e1, e2, e3, e4], 1, { opacity: 0, y: 50, delay: 1.5, ease: Power2.easeOut }, 0.12)
  }
  handleScroll() {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 20) {
      console.log('Hello')
    }
  }
  render() {
    return (
      <section className="split-item split-right-container">
        <HamburgerNav />
        <div className="split-right-faded-border" />
        <section
          id="about-me"
          className="section-spacing"
        >
          <h4 ref={(c) => { this.one = c }}>About</h4>
          <p ref={(c) => { this.two = c }}>Lacey is a designer and front-end developer based in Denver, Colorado. She's in love with everything design and development, and has a passion for turning complex ideas into simple, purpose driven, solutions. After dabbling in far to many design related fields she finally found her passion for developing and designing on the web and is known for her clean and minimal design aesthetic. Her other passions include working on her vintage motorcycle, drinking beer on patios, riding her bike down mountains, shredding the gnar, and being a kind human being. She also thinks her dog might be cooler than she is.<span><br />These are some skills and programs she uses along the way:</span></p>
          <ul className="skills" ref={(c) => { this.three = c }}>
            <li><span>Adobe Illustrator/InDesign/Photoshop/XD</span></li>
            <li><span>Sketch</span></li>
            <li><span>HTML/CSS</span></li>
            <li><span>JavaScript/JQuery</span></li>
            <li><span>GitHub</span></li>
          </ul>
        </section>

        <section className="experience section-spacing">
          <h4>Experience</h4>

          <div className="work-experience">
            <div className="work-description">
              <h5>Owner | Graphic Designer</h5>
              <p>Odin Creative</p>
            </div>
            <div className="work-year">
              <h5>2013-present</h5>
            </div>
          </div>

          <div className="work-experience section-spacing">
            <div className="work-description">
              <h5>Digital Designer</h5>
              <p>Crocs</p>
            </div>
            <div className="work-year">
              <h5>2015-2016</h5>
            </div>
          </div>

          <div className="work-experience">
            <div className="work-description">
              <h5>Graphic Designer</h5>
              <p>Anna B&eacute;</p>
            </div>
            <div className="work-year">
              <h5>2014-2015</h5>
            </div>
          </div>
        </section>
      </section>
    )
  }
}
