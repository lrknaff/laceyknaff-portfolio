import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2 } from 'gsap'
import { Link } from 'react-router'

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
    const e11 = this.eleven

    TweenMax.staggerFrom(
      [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11],
      0.7,
      {
        opacity: 0,
        y: 50,
        delay: 0.8,
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
      <section className="split-right split-right-container">
        <section
          className="split-right-about-me section-spacing"
        >
          <h4 ref={(c) => { this.one = c }}>About</h4>
          <p ref={(c) => { this.two = c }}>Lacey is a self-taught designer, school taught front-end developer, and lifelong learner. She is a firm believer that the whole is greater than the sum of its parts, and that designers and developers who work together can create longer lasting, more thoughtful, user experiences. Her goal is to craft user narratives that satisfy business objectives through design and development solutions. In her free time you'll probably find her outdoors or learning something new.
          She is available for full-time and freelance hire, and would love to <Link to="/Contact">work with you.</Link><span>
            <br />
          These are some skills and programs she uses along the way:</span></p>
          <ul
            className="skills"
            ref={(c) => { this.three = c }}
          >
            <li><span>Adobe Creative Suite, Sketch App, Invision</span></li>
            <li><span>JavaScript, jQuery, Sass, HTML, CSS, Git</span></li>
            <li><span>React, React Router, Redux, Ember, Express.js</span></li>
            <li><span>Mocha, Chai, Enzyme, Jest, Selenium</span></li>
          </ul>
        </section>

        <section className="split-right-experience section-spacing">
          <h4 ref={(c) => { this.four = c }}>Experience</h4>

          <div
            className="work-experience"
            ref={(c) => { this.five = c }}
          >
            <div className="work-description">
              <h5>Owner</h5>
              <p>Odin Designs</p>
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
            <p>B.Architecture</p>
            <p><a href="https://lrknaff.github.io/resume/" target="_blank" rel="noopener noreferrer">view resumé</a></p>
          </div>
        </section>

        <Link
          to="/Work"
        >
          <button
            className="button light-background-button"
            ref={(c) => { this.eleven = c }}
          >view projects
          </button>
        </Link>
      </section>
    )
  }
}
