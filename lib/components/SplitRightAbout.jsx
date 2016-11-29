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
    // window.addEventListener('scroll', this.handleScroll)
    if (this.state.mounted === 0) {
      this.gsapAnimationSlow()
    }
  }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
  gsapAnimationSlow() {
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
  // handleScroll() {
  //   console.log(window.pageYOffset)
  //   if (window.pageYOffset > 20) {
  //     console.log('Hello')
  //   }
  // }
  render() {
    return (
      <section className="split-right">
        <section
          className="split-right-about-me section-spacing"
        >
          <h4 ref={(c) => { this.one = c }}>About</h4>
          <p ref={(c) => { this.two = c }}>Lacey is a designer and front-end developer with a passion for turning complex ideas into simple, purpose driven, solutions. After dabbling in far too many design related fields she finally found her passion for developing and designing on the web and is known for her clean and minimal design aesthetic. She is available for full-time and freelance hire, and would love to <a href="#Contact" onClick={this.props.expandContactForm}>work with you.</a><span><br />These are some skills and programs she uses along the way:</span></p>
          <ul
            className="skills"
            ref={(c) => { this.three = c }}
          >
            <li><span>Adobe Creative Suite</span></li>
            <li><span>Sketch</span></li>
            <li><span>HTML/CSS/Sass</span></li>
            <li><span>JavaScript/JQuery</span></li>
            <li><span>React</span></li>
            <li><span>GitHub</span></li>
          </ul>
        </section>

        <section className="split-right-experience section-spacing">
          <h4 ref={(c) => { this.four = c }}>Experience</h4>

          <div
            className="work-experience"
            ref={(c) => { this.five = c }}
          >
            <div className="work-description">
              <h5>Owner | Graphic Designer</h5>
              <p>Odin Creative</p>
            </div>
            <div className="work-year">
              <h5>2013-present</h5>
            </div>
          </div>

          <div
            className="work-experience"
            ref={(c) => { this.six = c }}
          >
            <div className="work-description">
              <h5>Digital Designer</h5>
              <p>Crocs</p>
            </div>
            <div className="work-year">
              <h5>2015-2016</h5>
            </div>
          </div>

          <div
            className="work-experience"
            ref={(c) => { this.seven = c }}
          >
            <div className="work-description">
              <h5>Graphic Designer</h5>
              <p>Anna B&eacute;</p>
            </div>
            <div className="work-year">
              <h5>2014-2015</h5>
            </div>
          </div>
        </section>

        <section className="split-right-education section-spacing">
          <h4 ref={(c) => { this.eight = c }}>Education</h4>
          <div ref={(c) => { this.nine = c }}>
            <h5>Turing School of Software and Design</h5>
            <p>Front-End Engineering</p>
          </div>
          <div ref={(c) => { this.ten = c }}>
            <h5>University of Colorado, Boulder</h5>
            <p>B. Environmental Design</p>
          </div>
        </section>

        <button className="button light-background-button">view resumé</button>
      </section>
    )
  }
}
