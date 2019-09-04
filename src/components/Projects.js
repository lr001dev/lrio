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
                <Card.Img variant="top" src="/img/chat_party.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Chat Party is live chat MVC/CRUD application that allows users to create their own chat rooms and host group chats. I was interested in creating an application that used some kind of socket framework. I have been reading about Socket IO and it's js library to understand how sockets work. This was a fun journey that hit the project requirements and achieved all the stretch goals.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>NodeJs | Express | Express Session | MongoDB | SocketIO | Multer</ListGroup.Item>
                    <ListGroup.Item>EJS | Javascript | HTML5 | Bootstrap | Deployment Heroku </ListGroup.Item>
                  </ListGroup>
                  <Card.Footer>
                    <Button className="buttons" variant="outline-success" size="lg"><a href="https://chat-party.herokuapp.com" target="_blank">Live Demo</a></Button>
                    <Button className="buttons" variant="outline-success" size="lg"><a href="https://github.com/lr001dev/chatParty" target="_blank" >Check Out The Code</a></Button>
                  </Card.Footer>
                </Card>
              </div>
              <div>
                <Card>
                  <Card.Title>React Fitness</Card.Title>
                  <Card.Img variant="top" src="/img/react_fit.jpg" />
                  <Card.Body>
                    <Card.Text>
                      React Fitness is a MVC/CRUD booking app with a Ruby API. Users book their favorite classes based on their own time and schedule. I've been working with date and times for other projects and in the process of developing a pseudo library to handle calculating dates on the front end for real time booking apps. This is a project that I will continue to develop adding more functionality.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Ruby | Ruby On Rails | JWT Tokens | Http Only Cookie | REST API </ListGroup.Item>
                    <ListGroup.Item>React | Javascript | Bootstrap | Deployment Heroku </ListGroup.Item>
                  </ListGroup>
                  <Card.Footer>
                    <Button className="buttons" variant="outline-success" size="lg"><a href="https://react-fitness.herokuapp.com" target="_blank">Live Demo</a></Button>
                    <Button className="buttons" variant="outline-success" size="lg"><a href="https://github.com/lr001dev/reactStripeDashboardClient" target="_blank">Check Out Code</a></Button>
                  </Card.Footer>
                </Card>
              </div>
              <div>
                <Card>
                  <Card.Title>Food Fortune Web App</Card.Title>
                  <Card.Img variant="top" src="/img/fortune.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Food And Fortune is a random restaurant chooser front end application based on specialized food collections specific to a city. The app is based on the Zomato Restaurant and Fortune Cookie API. Users load a city and receive random selections of restaurants to guide them to their next food destination. The app also displays 1 Fortune from the Fortune Cookie API with each search.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>HTML5 | CSS | JQuery | Touchmove Event Listener  </ListGroup.Item>
                    <ListGroup.Item>Zomato API | Fortune Cookie API | HTML5 Audio | Git Hub Pages </ListGroup.Item>
                  </ListGroup>
                  <Card.Footer>
                    <Button className="buttons" variant="outline-success" size="lg"><a href="https://lr001dev.github.io/Food-And-Fortune-WebApp/" target="_blank">Live Demo</a></Button>
                    <Button className="buttons" variant="outline-success" size="lg"><a href="https://github.com/lr001dev/Food-And-Fortune-WebApp" target="_blank">Check Out The Code</a></Button>
                  </Card.Footer>
                </Card>
              </div>
              <div>
                <Card>
                  <Card.Title>GrooveStream 1.0</Card.Title>
                  <Card.Img variant="top" src="/img/groovestream1.jpg" />
                  <Card.Body>
                    <Card.Text>
                      GrooveStream is a passion project that is currently in active development. It's a realtime booking app for Yoga, Dance, Fitness & Meditation live streaming classes. It's a LAMP Stack powered on AWS EC2 and integrates AWS Cloudfront, S3, HLS Live Streaming, JW Player API & Wordpress. I'm Co-founder and lead developer. This is a working MVP in Beta with a growing customer base.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>PHP | AWS EC2 | AWS Cloudfront | AWS S3 | Stripe </ListGroup.Item>
                    <ListGroup.Item>Wordpress | Javascript | JW Player API | Deployment AWS </ListGroup.Item>
                  </ListGroup>
                <Card.Footer>
                  <Button className="buttons" variant="outline-success" size="lg"><a href="https://groovstream.info" target="_blank">Checkout The Landing Page</a></Button>
                  <Button className="buttons" variant="outline-success" size="lg"><a href="https://studio.groovetemple.tv" target="_blank">Login Page</a></Button>
                </Card.Footer>
              </Card>
            </div>
          </Carousel>
      </CardGroup>

      </>
    )
  }
}

export default Projects
