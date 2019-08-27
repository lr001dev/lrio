import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
  render() {
    return (
      <Container fluid>
        <header >
          <nav>
            <Navbar collapseOnSelect expand="lg" >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <LinkContainer to="/">
                  <Navbar.Brand>
                  <Container className="logo" fluid>
                  <img
                    alt=""
                    src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    /> <p>luisrosario.io</p>
                    </Container>
                  </Navbar.Brand>
                  </LinkContainer>
                  <Nav className="top-right-collapse">
                    <LinkContainer to="/about"><Nav.Link className="link">About</Nav.Link></LinkContainer>
                    <LinkContainer to="/projects"><Nav.Link className="link" eventKey={2}>Projects</Nav.Link></LinkContainer>
                    <h2 className="text-collapse">input::output</h2>
                  </Nav>
                </Navbar.Collapse>
                <Nav className="nav-right-links">
                  <LinkContainer to="/about"><Nav.Link className="link">About</Nav.Link></LinkContainer>
                  <LinkContainer to="/projects"><Nav.Link className="link" eventKey={2}>Projects</Nav.Link></LinkContainer>
                </Nav>
                <h2 className="top-right-text">input::output</h2>
              </Navbar>
            </nav>
          </header>
        </Container>
    )
  }
}
export default Header
