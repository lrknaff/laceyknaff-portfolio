import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { TweenMax } from 'gsap'

export default class Application extends Component {
  componentDidMount() {
    const node = this.node
    TweenMax.to(node, 5, { x: 299 })
  }
  render() {
    return (
      <div ref={(c) => { this.node = c }}>
        Hello!
      </div>
    )
  }
}
