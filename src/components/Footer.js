import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'


class Footer extends React.Component {
  render() {
    return (
      <Container  fluid>
        <div className="footer-text">
          <p>Built with React and Bootstrap | All rights reserved 2019</p>
        </div>
      </Container>
    )
  }
}

export default Footer
