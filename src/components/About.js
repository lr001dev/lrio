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
                src="/img/lr_head.jpg"
                className="about-img"
              />
            </div>
            <div className="banner-text">
              <h1>Luis Rosario</h1>
              <div className="arrow"><FaAngleDoubleDown/></div>
              <p>
                I love to code and thrive on taking on the daily challenges. My past experiences has made me an exceptional problem solver and a great communicator.  I keep the pulse on emerging technologies to further advance what I can deliver.  I enjoy being versatile and feel comfortable in either a Front End, Back End, Full Stack or Lead roles. I know nothing but to give it 100% because I get to do what I love!
              </p>
              <FaAngleDoubleDown/><p>Download Resume</p>
              <Row className="social-links">
                <Col>
                { /*LinkedIn */ }
                  <a href="/files/LUIS_ROSARIO_SOFTWARE_ENGINEER.pdf" target="_blank"><FaFile/></a>
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
