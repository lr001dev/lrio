import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Projects from './Projects'

class Main extends Component {
  render() {
    return (
        <main>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
        </main>
    )
  }
}

export default Main
