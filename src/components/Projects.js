import React, { Component } from 'react'
import { Container, Row, Col, Card, CardGroup, Button, ListGroup } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


class Projects extends React.Component {
  render() {
    return (
      <>
      <Container className="" fluid>
      <Row>
        <Col xs={12}>
        <div className="avatar">
          <img
            src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg"
          />
        </div>
        <Card className="featured-project">
          <Card.Header className="text-center">Featured Project</Card.Header>
          <Card.Body><Card.Title>AD Present: WebRtc Video Chat App</Card.Title>
            <Card.Img variant="bottom" height="460px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
            <Card.Text>
              Real time video conference and presentation app
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
          </ListGroup>
           <Card.Footer className="text-muted text-center">
            <Button variant="outline-success" size="lg">Live Demo</Button>
            <Button variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>

      </Card>

        </Col>
        </Row>
      </Container>

      <CardGroup className="slider">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        >

        <div>

    <Card>
      <Card.Img variant="top" height="160px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
      <Card.Body>
        <Card.Title>Food Fortune Web App</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="outline-success" size="lg">Live Demo</Button>
      <Button variant="outline-success" size="lg">Check Out The Code</Button>
      </Card.Footer>
    </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" height="160px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
          <Card.Body>
            <Card.Title>Chat Party</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success" size="lg">Live Demo</Button>
          <Button variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" height="160px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
          <Card.Body>
            <Card.Title>React Fitness</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success" size="lg">Live Demo</Button>
          <Button variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" height="160px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
          <Card.Body>
            <Card.Title>Watch Party</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success" size="lg">Live Demo</Button>
          <Button variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" height="160px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
          <Card.Body>
            <Card.Title>GrooveStream 1.0</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success" size="lg">Live Demo</Button>
          <Button variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" height="160px" src="https://avatars.dicebear.com/v2/bottts/lr001dev.svg" />
          <Card.Body>
            <Card.Title>GrooveStream 2.0</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            Under Development
          </Card.Footer>
        </Card>
        </div>

      </Carousel></CardGroup>

      </>
    )
  }
}

export default Projects
