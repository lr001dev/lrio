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
        <Card>
          <Card.Title>Chat Party</Card.Title>
          <Card.Img variant="top" src="/img/chat_party.png" />
          <Card.Body>

            <Card.Text>
              Chat Party is live chat MVC/CRUD application that allows users to create their own chat rooms and host group chats. I was interested in creating an application that used some kind of socket framework. I have been reading about Socket IO and it's js library to understand how sockets work and if I could successfully implement it and send events from the front end to the back end. This was a fun journey that hit the project requirements and achieved all the stretch goals.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>NodeJs | Express | Express Session | MongoDB | SocketIO | Multer</ListGroup.Item>
            <ListGroup.Item>EJS | Javascript | HTML5 | Bootstrap | Deployment Heroku </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg"><a href="https://chat-party.herokuapp.com">Live Demo</a></Button>
          <Button className="buttons" variant="outline-success" size="lg"><a href="https://github.com/lr001dev/chatParty">Check Out The Code</a></Button>
          </Card.Footer>
        </Card>
        </div>
        <div>
        <Card.Title>React Fitness</Card.Title>
        <Card>
          <Card.Img variant="top" src="/img/react_fit.jpg" />
          <Card.Body>

            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Ruby | Ruby On Rails | JWT Tokens | Http Only Cookie | REST API </ListGroup.Item>
            <ListGroup.Item>React | Javascript | Bootstrap | Deployment Heroku </ListGroup.Item>
          </ListGroup>
          <Card.Footer>
          <Button className="buttons" variant="outline-success" size="lg"><a href="https://react-fitness.herokuapp.com">Live Demo</a></Button>
          <Button className="buttons" variant="outline-success" size="lg"><a href="https://github.com/lr001dev/reactStripeDashboardClient">Check Out The Front End Code</a></Button>
          </Card.Footer>
        </Card>
        </div>
        <div>

    <Card>
      <Card.Title>Food Fortune Web App</Card.Title>
      <Card.Img variant="top" src="/img/fortune.png" />
      <Card.Body>

        <Card.Text>
          Food And Fortune is a random restaurant chooser application based on specialized food collections specific to a city. The app is based on the Zomato Restaurant and Fortune Cookie API. Users load a city and receive random selections of restaurants to guide them to their next food destination. The app also displays 1 Fortune from the Fortune Cookie API with each search.
        </Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>HTML5 | CSS | JQuery | Touchmove Event Listener  </ListGroup.Item>
        <ListGroup.Item>Zomato API | Fortune Cookie API | HTML5 Audio | Git Hub Pages </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
      <Button className="buttons" variant="outline-success" size="lg"><a href="https://chat-party.herokuapp.com">Live Demo</a></Button>
      <Button className="buttons" variant="outline-success" size="lg"><a href="https://lr001dev.github.io/Food-And-Fortune-WebApp/">Check Out The Code</a></Button>
      </Card.Footer>
    </Card>
        </div>
        <div>

        <Card>
          <Card.Title>GrooveStream 1.0</Card.Title>
          <Card.Img variant="top" src="/img/react_fit.jpg" />
          <Card.Body>

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
