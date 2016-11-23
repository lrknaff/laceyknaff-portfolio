import React, { Component } from 'react'
import { TweenMax, staggerFrom, Power2, Bounce } from 'gsap'

export default class DropDownNav extends Component {
  render() {
    return (
      <nav id="nav-inner">
        <ul id="full-screen-nav">
          <li id="about-link" className="menu-item fade-in-up"><a href="#About">About</a>
          </li>
          <li className="menu-item fade-in-up fade-in-up-second"><a href="#Projects">Projects</a>
          </li>
          <li className="menu-item fade-in-up fade-in-up-third"><a href="#Projects">Contact</a>
          </li>
          <li className="menu-item fade-in-up fade-in-up-fourth"><a href="#Projects">Blog</a>
          </li>
        </ul>
      </nav>
    )
  }
}
