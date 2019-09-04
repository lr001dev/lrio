import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaAngleDoubleDown } from 'react-icons/fa'


class Home extends Component {
  render() {
    return (
      <Container className="top-block" fluid>
        <Row>
          <Col xs={12}>
            <div className="avatar">
              <img
                src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg"
              />
            </div>
            <div className="banner-text">
              <h1>Software Engineer</h1>
              <div className="arrow"><FaAngleDoubleDown/></div>
              <p>NodeJS | React | Express | MongoDB | Ruby | Rails | Postgres | Javascript | PHP | Wordpress | HTML/CSS | JQuery | Bootstrap</p>
              <Row className="social-links">
                <Col>
                { /*LinkedIn */ }
                  <a href="https://github.com/lr001dev/" target="_blank"><FaGithub/></a>
                </Col>
                <Col>
                  <a href="https://www.linkedin.com/in/luisrosario-la" target="_blank"><FaLinkedin /></a>
                </Col>
                <Col>
                  <a href="https://github.com" target="_blank"><FaFacebook /></a>
                </Col>
                <Col>
                  <a href="mailto: lr@luisrosario.io" target="_blank"><FaEnvelope /></a>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Container>

    )
  }
}

export default Home
