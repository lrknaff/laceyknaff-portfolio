import React, { Component } from 'react'
// import ScrollEffect from 'react-scroll-effects'

export default class SplitLeftMain extends Component {
  render() {
    return (
      <section className="split-item split-left-container">
        <div className="split-left-text-block">
          {/* <ScrollEffect animate="fadeInUp">
            <h1>test 1</h1>
          </ScrollEffect> */}
          <h1 className="split-left-text animated fadeInUp">Hi, I'm Lacey.</h1>
          <h3 className="split-left-text animated fadeInUp">Graphic Designer and Front-End Developer.</h3>
          <button className="button animated fadeInUp">say hello</button>
          <div className="split-left-social animated fadeInUp">
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
        </div>
      </section>
    )
  }
}
