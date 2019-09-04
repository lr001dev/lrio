import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends React.Component {
  componentDidMount() {
    fetch(`http://chat-party.herokuapp.com`, {
    }).catch(err=>console.log(err))
    fetch(`http://lr001dev.github.io/Food-And-Fortune-WebApp/`, {
    }).catch(err=>console.log(err))
    fetch(`http://react-fitness.herokuapp.com`, {
    }).catch(err=>console.log(err))
  }
  render() {
    return (
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    )
  }
}
export default App
