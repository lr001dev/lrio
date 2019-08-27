import React, { Component } from 'react'
import { Card, CardGroup, Button, ListGroup } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


class Projects extends Component {
  render() {
    return (
      <>
      <CardGroup className="slider">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode={true}
        >
        <div>
        <Card >
          <Card.Img variant="top" src="/img/fortune.png" />
          <Card.Body>
            <Card.Title>Ad Present: WebRtc Video Chat App</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg">Live Demo</Button>
          <Button className="buttons" variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>

        </div>
        <div>

        <Card>
          <Card.Img variant="top" src="/img/chat_party.png" />
          <Card.Body>
            <Card.Title>Chat Party</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg">Live Demo</Button>
          <Button className="buttons" variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

    <Card>
      <Card.Img variant="top" src="/img/fortune.png" />
      <Card.Body>
        <Card.Title>Food Fortune Web App</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
        <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
      <Button className="buttons" variant="outline-success" size="lg">Live Demo</Button>
      <Button className="buttons" variant="outline-success" size="lg">Check Out The Code</Button>
      </Card.Footer>
    </Card>
        </div>

        <div>

        <Card>
          <Card.Img variant="top" src="/img/react_fit.jpg" />
          <Card.Body>
            <Card.Title>React Fitness</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg">Live Demo</Button>
          <Button className="buttons" variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" src="/img/chat_party.png" />
          <Card.Body>
            <Card.Title>Watch Party</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg">Live Demo</Button>
          <Button className="buttons" variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

        <Card>
          <Card.Img variant="top" src="/img/react_fit.jpg" />
          <Card.Body>
            <Card.Title>GrooveStream 1.0</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | WebRtc | Media Soup | SocketIO | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment AWS </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg">Live Demo</Button>
          <Button className="buttons" variant="outline-success" size="lg">Check Out The Code</Button>
          </Card.Footer>
        </Card>
        </div>

      </Carousel></CardGroup>

      </>
    )
  }
}

export default Projects
