import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { FaFile, FaAngleDoubleDown } from 'react-icons/fa'


class About extends Component {
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
              <h1>Luis Rosario</h1>
              <div className="arrow"><FaAngleDoubleDown/></div>
              <p>NodeJS | React | Express | MongoDB | Ruby | Rails | Postgres | Javascript | PHP | Wordpress | HTML/CSS | JQuery | BootstrapNodeJS | React | Express | MongoDB | Ruby | Rails | Postgres | Javascript | PHP | Wordpress | HTML/CSS | JQuery | BootstrapNodeJS | React | Express | MongoDB | Ruby | Rails | Postgres | Javascript | PHP | Wordpress | HTML/CSS | JQuery | Bootstrap</p>
              <FaAngleDoubleDown/><p>Download Resume</p>
              <Row className="social-links">
                <Col>
                { /*LinkedIn */ }
                  <a href="https://github.com/lr001dev/" rel="noopener noreferrer" target="_blank"><FaFile/></a>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Container>

    )
  }
}

export default About
