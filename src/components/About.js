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
                I do my passions. That has never changed in my life. As a result, my skill set has evolved tremendously since I do have a dynamic background. I love to code. I thrive on new experiences and invite new possibilities that will allow me to take on new challenges. I’m an exceptional problem solver and a great communicator. I often interface with clients who expect nothing but the best where clear communication is paramount to the work I do. I always fun! 
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
